import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Test from './components/navtest.js';
import Vid from './components/vid.js';
import Hero from './components/hero.js';
import Footer from './components/footer.js';
import Home from './components/home';
import Merchants from './components/Merchants';
import Pands from './components/Pands';
import Support from './components/Support';
import Company from './components/contactus';
import {Link, Route} from "react-router-dom";
import React, { Component }  from 'react';
import {Element} from 'react-scroll';



function App() {
  return (
    <div className="App bg-white">
      <Test/>
      {/* <Navbar/> */}
 <Element className='Hero'> <Hero/></Element> 
 <Element className='Vid'> <Vid/></Element> 
 <Element className='Home'> <Home/></Element> 
 <Element className='Merchants'>  <Merchants/></Element> 
 {/* <Element className='Pands'>  <Pands/></Element>  */}
 <Element className='Support'>  <Support/></Element> 
 <Element className='Company'>   <Company/></Element> 
 


 

 <Footer/>
    </div>
  );
}

export default App;
