import React from 'react';
import './styles.css';
import Card from '../../components/UI/card';

const Sidebar = (props) => {
  return(
    <div className="sidebar-container">
        
        
        <Card style={{marginBottom: "10px"}}>
            <div className="card-header">
                <span>About us</span>
                <div className="profile-image-container">
                    <img src="https://restaurateurs.goodfrance.com/sites/default/files/Sujosh%20Profile%20Pic.jpg" alt="profile image"/>

                </div>
            </div>

            <div  className="card-body">
                <p className="personal-bio">
                    My name is Sujosh Kahali
                </p>
            </div>            
        </Card>     

        <Card style={{marginBottom: "10px"}}>
            <div className="card-header">
                <span>Social Network</span>
            </div>            
        </Card>    


        <Card style={{marginBottom: "10px"}}>
            <div className="card-header">
                <span>Recent Posts</span>
            </div>

            <div className="recent-posts">
                
               {/* Recent post 1 */}
                <div className="recent-post">
                    <h3>How to not be</h3>
                    <span>June 29, 2018</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, minima...</p>
                </div>

                {/* Recent post 2 */}
                <div className="recent-post">
                    <h3>How not to do</h3>
                    <span>June 29, 2018</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, minima...</p>
                </div>

                {/* Recent post 3 */}
                <div className="recent-post">
                    <h3>How not to not</h3>
                    <span>June 29, 2018</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, minima...</p>
                </div>

            </div>

        </Card>
    </div>       
   )
  }


export default Sidebar;