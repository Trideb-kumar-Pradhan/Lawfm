import React from 'react'
import styles from './Homepage.module.css'
// import messageicon from '../../Assets/messageicon.png'
import yellowbackground from '../../Assets/yellowcard.png'
import person from '../../Assets/personimage.png'


const Homepage = () => {
  return (
    <div className={styles.page}>
        <div className={styles.paragraph}>
          <h1>You don’t have to 
              Fight them Alone.
          </h1>
          <h3>
             Lorem ipsum dolor sit amet consectetur adipiscing elit 
             blandit, curabitur sodales conubia ut inceptos faucibus
             himenaeos tortor eget, hac massa gravida arcu interdum 
             proin curae.
          </h3>
        </div>
     <div className={styles.searchbar}>
     {/* <img src={messageicon} className={styles.icon}/> */}
      <input type='text'  placeholder="Enter your eamil address"/>
       <button>Let's Talk</button>
     </div>
       
       {/* Person image and background */}
       <div className={styles.image}>
       <img src={yellowbackground} blank="yellowbackground"/>
       <img src={person} blank="person" className={styles.personimage}/>
       </div>
    </div>
  )
}

export default Homepage;