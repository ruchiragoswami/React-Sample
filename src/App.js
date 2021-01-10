import { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserComponent from './UserComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      requestError: false,
      errorMessage: ''
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const promise = axios.get('https://randomuser.me/api/?results=25');
    promise
      .then((response) => {
        // When promise resolves successfully, run this
        if(response.data.results)
          this.setState({ users: response.data.results, errorMessage: ''});
        else this.setState({errorMessage : "No users found"})
      })
      .catch((error) => {
        //Request failed
        this.setState({ requestError: true, errorMessage:'error reading data'});
      });
  }

  handleDelete(md5) {
    this.setState({users: this.state.users.filter(user => user.login.md5 !== md5)});
  }

  render() {  
    return(
      <div className="App">
        <h1> Users </h1>
        {this.state.errorMessage}
      
        {this.state.users.map((user) => 
          { 
            return(
              <UserComponent 
              key={user.login.md5}
                user={user}
                Delete = {()=> this.handleDelete(user.login.md5)}                
              />
            );
          })
        }    
      </div>
    );
  }  
}

export default App;
