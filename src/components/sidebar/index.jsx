import React , {useState, useEffect} from 'react';
import './styles.css';
import Card from '../../components/UI/card';
import blogPost from '../../data/blogs.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {


const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts)
  },posts);




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

                {
                    posts.map(post => {
                        return(
                            <NavLink to={`/post/${post.id}`}>
                            <div className="recent-post">
                                <h3>{post.blogTitle}</h3>
                                <span>{post.postedOn}</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, minima...</p>
                            </div>
                            </NavLink>
                            
                        )                        
                    })
                }


             

            </div>

        </Card>
    </div>       
   )
  }


export default Sidebar;