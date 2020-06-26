import React, {useState, useEffect} from 'react';
import './styles.css';
import Card from '../../components/UI/card';
import blogPost from '../../data/blogs.json';



/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  // react hooks concept. Need to read up further about this
  const [post, setPost] = useState({});

  const [postId, setPostId] = useState('');

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId)
    setPost(post);
    setPostId(postId)
  },[post, props.match.params.postId]);

  return(   
    
    
    <div className="blogpost-container">
         <Card>
             <div className="blog-header">
                <span className="blog-category">{post.blogCategory}</span>
                <h1 className="post-title">{post.blogTitle}</h1>
                <span className="posted-by">posted on {post.postedOn} by {post.author} </span>
             </div>

             <div className="post-image-container">
                 <img src={require('../../blog_images/anastasia-lysiak-F5I82loZ1og-unsplash.jpg')}  alt="Post Image"/>

             </div>


              <div className="post-content">

                <h3>Post Title</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ratione corporis et placeat sint deleniti repellendus aspernatur distinctio laudantium eligendi.</p>


              </div>




            
        </Card>  
    </div>

     
    
   )
  }


export default BlogPost