import React from 'react'
import styles from './Navbarlogo.module.css'
import icon from '../../Assets/logo.png'
const Navbarlogo = () => {
  return (
    <div className={styles.logo}>
      <img src={icon}/>
    </div>
  )
}

export default Navbarlogo;