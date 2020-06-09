import React, {useState} from 'react'
import './styles.css';
import searchIcon from '../../assets/icons/search.png';
import {NavLink} from 'react-router-dom';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] =useState(false);

    const submitSearch =(e) => {
        e.preventDefault();
        alert("It's working !")

    }

    const openSearch =() => {
        setSearch(true);
    }

    const searchClass = search ? "search-input-active" : "search-input"
  return(
    <div className="navbar"> 
        <ul className="navbarMenu">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/aboutus">ABOUT US</NavLink></li>
            <li><NavLink to="/post">POSTS</NavLink></li>
            <li><NavLink to="/contactus">CONTACT US</NavLink></li>            
        </ul>
        <div className="search">
            <form  onSubmit={submitSearch}>
                <input className={searchClass} type="text" placeholder="search"/>
                <img onClick={openSearch} className="search-icon" src={searchIcon} alt="Search" width="50" height="50"/>
        
            </form>
            </div>
    </div>
   )
  }


export default Navbar;