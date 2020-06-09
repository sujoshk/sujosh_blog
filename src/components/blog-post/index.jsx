import React from 'react';
import './styles.css';
import Card from '../../components/UI/card';



/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(   
      
    <div className="blogpost-container">
         <Card>
             <div className="blog-header">
                <span className="blog-category">Featured</span>
                <h1 className="post-title">Beautiful is always beautiful</h1>
                <span className="posted-by">posted on July 21, 2019 by Ramesh Tiwari</span>
             </div>

             <div className="post-image-container">
                 <img src={require('../../blog_images/anastasia-lysiak-F5I82loZ1og-unsplash.jpg')}  alt="Post Image"/>

             </div>
            
        </Card>  
    </div>

     
    
   )
  }


export default BlogPost