// import './Navbar.css';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { scroller } from 'react-scroll'
// import { Dialog } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'  
// import { slide as Menu } from 'react-burger-menu'
import styled from "styled-components";
let Logo = require('./logo.png')
// let Bg = require('./bg.jpg')
// let Phone = require('./phone.png')
// let Comp = require('./mainimg.png')


// start
const COLORS = {
    primaryDark: "#4d7c0f",
    primaryLight: "#ecfccb",
  };
  
//   circle
  const MenuLabel = styled.label`
    background-color: ${COLORS.primaryLight};
    position: fixed;
    top: 0.75rem;
    right: 1rem;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
    text-align: center;
    @media (min-width: 768px) {
      display:none;;
    }
  `;
  
  const NavBackground = styled.div`
    position: fixed;
    top: 0.1rem;
    right: 0.25rem;
    background-image: radial-gradient(
      ${COLORS.primaryDark},
      ${COLORS.primaryLight}
    );
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    z-index: 600;
    transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
    transition: transform 0.8s;
  `;
  
  const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "black")};
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    margin-top: 1.5rem;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      background-color: black;
      width: 1.5rem;
      height: 2px;
      display: inline-block;
      position: absolute;
      left: 0;
      transition: all 0.3s;
    }
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
    ${MenuLabel}:hover &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.6rem")};
    }
    ${MenuLabel}:hover &::after {
      top: ${(props) => (props.clicked ? "0" : "0.6rem")};
    }
  `;
  
  const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    transition: width 0.8s, opacity 0.8s;
  `;
  
  const List = styled.ul`
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `;
  const div = styled(NavLink)`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover,
    &:active {
      background-position: 100%;
      color: ${COLORS.primaryDark};
      transform: translateX(1rem);
    }
  `;
// fin  

export default function Test() {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
          duration:800,
          delay:50,
          smooth:true,
          offset:-80
        })
      }

    return (
        
      <body >
        <div id="circle">
 <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List className="text-lime-100 text-3xl justify-center ml-10 ">
          <li>
            <div className="mb-2" onClick={()=> {handleClick();scrollToElement('Home')}} >
             About
            </div>
          </li>
          <li>
            <div className="mb-2" onClick={()=> {handleClick();scrollToElement('Merchants')}} >
              Solutions
            </div>
          </li>
          <li>
            <div className="mb-2" onClick={()=> {handleClick();scrollToElement('Pands')}} >
              Our Impact
            </div>
          </li>
          <li>
            <div onClick={()=> {handleClick();scrollToElement('Company')}} >
              Contact
            </div>
          </li>
        </List>
      </Navigation>  
      </div>
        
      
                    <nav class="navbar justify-center">


                        
                    <img id="logo" href="#" class="nav-branding w-3/5 pt-5 md:w-72  ]" src={Logo} alt="" />
            
                    <ul class="nav-menu justify-end md:ml-[13%]   hidden md:flex mt-5  ">
                        <li className="items   font-sans text-3xl font-bold tracking-tight text-lime-900 sm:text-6xl sm:leading-none">
                        <a onClick={()=>scrollToElement('Home')}><a href="#" class="nav-link">About</a></a>
                        </li>
                        <li className="items  font-sans text-3xl font-bold tracking-tight text-lime-900 sm:text-6xl sm:leading-none">
                        <a onClick={()=>scrollToElement('Merchants')}> <a href="#" class="nav-link">Solutions</a></a>
                        </li>
                        <li className="items  font-sans text-3xl font-bold tracking-tight text-lime-900 sm:text-6xl sm:leading-none">
                        <a onClick={()=>scrollToElement('Pands')}>  <a href="#" class="nav-link">Our Impact</a></a>
                        </li>
                        <li className="items  font-sans text-3xl font-bold tracking-tight text-lime-900 sm:text-6xl sm:leading-none">
                        <a onClick={()=>scrollToElement('Company')}><a href="#" class="nav-link">
                            Contact</a></a>
                        </li>
  
                      </ul>
                    {/* <div class="hamburger">
                      <span class="bar"></span>
                      <span class="bar"></span>
                      <span class="bar"></span>
                    </div> */}
                    </nav>

                    
              
  
               
     
      </body>
      
    )
 
    
  }
//   const hamburger = document.querySelector(".hamburger");
//   const navMenu = document.querySelector(".nav-menu");
  
  
//       if(hamburger) {
//       hamburger.addEventListener("click", ()=> {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//       })
      
      
//       document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
      
//       }))
//   }



