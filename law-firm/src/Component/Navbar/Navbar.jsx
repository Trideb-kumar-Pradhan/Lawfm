import React from 'react'
import styles from './Navbar.module.css'
import Navbarlogo from '../Navbarlogo/Navbarlogo'
import Navproperty from '../Navproperty/Navproperty'
import Contactus from '../Contactus/Contactus'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
            <Navbarlogo/>
            <Navproperty/>
             <Contactus/>
      </nav>
  )
}

export default Navbar;