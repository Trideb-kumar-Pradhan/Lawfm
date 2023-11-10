import React from 'react'
import styles from './Subscribenews.module.css'
const Subscribenews = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
      </div>
      <div>
        <form>
          <input className={styles.input1} type="text" placeholder="Name : " />
          <input
            className={styles.input2}
            type="text"
            placeholder="Enter your email : "
          />
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribenews