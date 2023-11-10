import React from 'react'
import styles from './Happyclient.module.css'
import Janeimg from '../../Assets/Jane.png'
import Devonimg from '../../Assets/Devon.png'
import Robertimg from '../../Assets/Robert.png'

const Happyclient = () => {
  return (
    <div className={styles.Happyclient}>
        <div className={styles.title}>
        <h1>What says our happy Clients</h1>
        </div>
         
        <div className={styles.cards}>
            
            <div className={styles.firstcard}>
            <div className={styles.circle}>
            <img src={Janeimg}/>
            </div>
            
            <div className={styles.Ceoname}>
            <h4>Jane Cooper</h4>
            </div>
            <div className={styles.theory}>
              
               <h3>Ceo of Hunt</h3>
            
              <p>Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
                 Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
              </p>
              </div>
            </div>
            
            <div className={styles.secondcard}>
            <div className={styles.circle}>
            <img src={Devonimg}/>
            </div>

            <div>
            <h4 className={styles.Ceosecond}>
               Devon Lane
               </h4>
            </div>
            <div className={styles.theory}>
             <h3>Ceo of Hunt</h3>
              <p>  Amet minim mollit non deserunt ullamco est
                   sit aliqua dolor do amet sint. Velit officia
                   consequatduis enim velit mollit Exer.
                   Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
                 </p>
            </div>
          </div>
            
            <div className={styles.thirdcard}>
            <div className={styles.circle}>
            <img src={Robertimg}/>
            </div>

            <div className={styles.Ceoname3}>
            <h4>RobertFox</h4>
            </div>
            <div className={styles.theory}>          
            <h3>Ceo of Hunt</h3>
              <p>Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
                 Amet minim mollit non deserunt ullamco est
                 sit aliqua dolor do amet sint. Velit officia
                 consequatduis enim velit mollit Exer.
              </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Happyclient