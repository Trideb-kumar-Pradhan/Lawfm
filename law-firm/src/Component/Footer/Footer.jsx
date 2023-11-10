import React from 'react'
import styles from './Footer.module.css'
import Insta from '../../Assets/Insta.png'
import Facebook from '../../Assets/Facebook.png'
import Printrest from '../../Assets/Printrest.png'
import Twitter from '../../Assets/Twitter.png'
import logo from '../../Assets/logo.png'
const Footer = () => {
  return (
    <div className={styles.container}>
    <nav className={styles.navbar}>
      <img src={logo} alt="logo-img" width={143} />
      <div className={styles.navcontent}>
        <span className={styles.imgMedia}>Home </span>
        <span className={styles.imgMedia}>Attorneys </span>
        <span className={styles.imgMedia}>Practice Area </span>
        <span className={styles.imgMedia}>About Us </span>
      </div>
      <div className={styles.media}>
        <img src={Insta} alt="Insta" className={styles.imgMedia} />
        <img src={Facebook} alt="Facebook" className={styles.imgMedia} />
        <img src={Twitter} alt="Titter" className={styles.imgMedia} />
        <img src={Printrest} alt="Printrest" className={styles.imgMedia} />
      </div>
    </nav>
    <div className={styles.copyright}>
      <p>© 2020 Acme. All right reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </div>
  </div>
  )
}

export default Footer;