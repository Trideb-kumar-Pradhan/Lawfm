import React from 'react'
import styles from './Whychooseus.module.css'
import Giftlogo from '../../Assets/gift.png'

const Whychooseus = () => {
  return (
    <div className={styles.whychoose}>
        <h1>Why Choose us?</h1>
        <div className={styles.cards}>
            
            <div className={styles.firstcard}>
            <div className={styles.circle}>
            <img src={Giftlogo}/>
            </div>
            <br/>
            <div className={styles.sucessrate1}>
               <h4>98% Success Rate</h4>
            </div>
            
            <div className={styles.theory}>           
              <p>Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
              </p>
              <button> Read More </button>
              </div>
            </div>
            
            <div className={styles.secondcard}>
            <div className={styles.circle}>
            <img src={Giftlogo}/>
            </div>
            <div className={styles.sucessrate2}>
            <h4>100% Success Rate</h4>
            </div>
            <div className={styles.theory}>
              <p>  Amet minim mollit non deserunt ullamco est
                   sit aliqua dolor do amet sint. Velit officia
                   consequatduis enim velit mollit Exer.Amet minim mollit non deserunt ullamco est
                   sit aliqua dolor do amet sint. Velit officia
                   consequatduis enim velit mollit Exer.
                 </p>
              <button> Read More </button>
            </div>
          </div>
            
            <div className={styles.thirdcard}>
            <div className={styles.circle}>
            <img src={Giftlogo}/>
            </div>
            <div className={styles.sucessrate3}>
            <h4>100% Success Rate</h4>
            </div>
            <div className={styles.theory}>
              <p>Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
              </p>
              <button> Read More </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Whychooseus