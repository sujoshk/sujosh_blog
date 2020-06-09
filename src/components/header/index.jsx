import React from 'react';
import './styles.css'

/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="header-menu">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
        </nav>
        <div className="social-media-icons">
            SOCIAL MEDIA ICONS
        </div>
    </header>
   )
  }


export default Header;