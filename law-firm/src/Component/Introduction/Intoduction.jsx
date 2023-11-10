import React from 'react'
import styles from './Introduction.module.css'


const Intoduction = () => {
  return (
    <div className={styles.aboutus}>
        <div className={styles.abouttitle}>
            <h1>Let’s Introduce Ourself</h1>
        </div>

        <div className={styles.criminallaywer}>
           <h3>Criminal Lawyer</h3>
           <h2>
              Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint.<br/> Velit officia consequatduis
              enim velit mollit Exercitation.
            </h2>
        </div>
    </div>
  )
}

export default Intoduction