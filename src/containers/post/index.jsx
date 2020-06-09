import React from 'react';
import './styles.css';
import Card from '../../components/UI/card';
import BlogPost from '../../components/blog-post';
import Sidebar from '../../components/sidebar/index';

/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
      <div>
        <section className="container">
            <BlogPost/>        
            <Sidebar/>
        </section>
      </div>
    
   )
  }


export default Post;