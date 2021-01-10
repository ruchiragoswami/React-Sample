import React from 'react';
import ladyicon from './images/ladyicon.png';
import manicon from './images/manicon.png';
import flag from './images/flag.png';

class UserComponent extends React.Component {
    render() {
        return(
            <div>
                <table >
                    <tbody> 
                        <tr>      
                            <th> Title </th>  
                            <td> {this.props.user.name.title} </td> 
                        </tr>
                        <tr>   
                            <th> First Name  </th>
                            <td> {this.props.user.name.first}  </td>
                        </tr>
                        <tr>  
                            <th> Last Name </th>
                            <td> {this.props.user.name.last} </td> 
                        </tr>
                        <tr>  
                            <th> Profile Image </th>
                            {this.props.user.picture && this.props.user.picture.medium && this.props.user.picture.medium.length > 0 &&                 
                            <td>  <img className="thumb" src= {this.props.user.picture.medium}  alt="User"/> </td> }                
                        </tr>
                        <tr>  
                            <th> Gender </th>
                            {/* Icons for male/female */}
                            {this.props.user.gender &&   this.props.user.gender==='male' &&               
                            <td>  <img className="icon" src={manicon}  alt="male icon"/> </td>}                 
                            {this.props.user.gender &&   this.props.user.gender==='female' &&               
                            <td>  <img className="icon" src= {ladyicon}  alt="female icon"/> </td>}                                                          
                        </tr>
                        <tr>  
                            <th> City </th>
                            <td> {this.props.user.location.city}  </td> 
                        </tr>             
                        <tr>  
                            <th> State </th>
                            <td> {this.props.user.location.state}  </td> 
                        </tr>
                        <tr>  
                            <th> Country </th>
                            <td>    
                                {this.props.user.location.country}   
                                {/*  Amercian Flag */}
                                {this.props.user.location.country &&   this.props.user.location.country==='United States' &&                   
                                <img className="flag" src={flag} alt="American Flag"  /> }        
                            </td> 
                        </tr>
                        <tr>  
                            <th> Email </th>
                            <td> {this.props.user.email}  </td> 
                        </tr>                       
                    </tbody>
                </table> 
                <div> 
                    <button onClick={this.props.Delete}> Delete </button> 
                </div>
                <hr/>
            </div>
        );
    }
}

export default UserComponent;