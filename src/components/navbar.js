

import React, {useState, useEffect} from 'react'
import './navbar.css'
import styles from "../index.css"


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
        <div><h1 className="logo">OlivePay</h1></div>
        <div >


      {(toggleMenu || screenWidth > 500) && (

      <ul className="list">
      <li className="items  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Merchants</li>
      <li className="items  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Products & Services</li>
      <li className="items  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Company</li>
      <li className="items  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Careers</li>
      <li className="items  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Support</li>
    </ul>
      )}
</div>
      <a onClick={toggleNav} className="btn">Menu</a>
      
    </nav>
  )
}


