import React from 'react';
import './styles.css';
import Card from '../../components/UI/card';

const Sidebar = (props) => {
  return(
    <div className="sidebar-container">
        <Card style={{marginBottom: "20px"}}>
            <div className="card-header">
                <span>About us</span>
                <div className="profile-pic">
                    <img src="https://restaurateurs.goodfrance.com/sites/default/files/Sujosh%20Profile%20Pic.jpg" alt="profile image"/>

                </div>
            </div>            
        </Card>     

        <Card>
            <div className="card-header">
                <span>Social Network</span>
            </div>            
        </Card>    
    </div>       
   )
  }


export default Sidebar;