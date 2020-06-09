import React from 'react';
import './styles.css';
import Card from '../UI/card';
import Logo from '../logo/index.jsx';
import Navbar from '../navbar/index';

/**
* @author
* @function 
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
          <div style={{padding: '50px 0'}}>
          <Logo/>
            
          </div>
        <Navbar>NAVBAR</Navbar>
        </Card>
        
    </div>
   )
  }


export default Hero;