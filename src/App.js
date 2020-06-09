import React from 'react';
import Home from './containers/home/index.jsx'
import ContactUs from './containers/contact-us/index.jsx'
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Post from './containers/post/index';
import AboutUs from './containers/about-us/index';


function App() {
  return (
    
      <div className="App">
      <Router>
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home}/>       
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/post" component={Post}/>
        <Route path="/aboutus" component={AboutUs}/>
      </Router>      
      </div>    
  );
}

export default App;
