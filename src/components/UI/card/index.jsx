import React from 'react';
import './styles.css';

/**
* @author
* @function 
**/

const Card = (props) => {
  return(
    <div className="card" style={props.style} {...props}>
        {props.children}
    </div>
   )
  }


export default Card;