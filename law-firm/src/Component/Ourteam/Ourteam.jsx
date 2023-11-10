import React from 'react'
import styles from './Ourteam.module.css'
import Danialimg from '../../Assets/Danial.png'
import Sanfoleimg from '../../Assets/sandford.png'
import Cesfiloimg from '../../Assets/cesforila.png'
import Haldoneimg from '../../Assets/Haldone.png'
import Collenimg from '../../Assets/Colleen.png'
import Nikjoeimg from '../../Assets/Nikjoe.png'
const Ourteam = () => {
  return (
    <div className={styles.teamdetail}>
       <h1>Our Team </h1>
       <div className={styles.teammember}>
          <div className={styles.firstrow}>
              <div className={styles.member}>
                <img src={Danialimg}/>
                <div className={styles.namecases}>
                <h5>Danial Def</h5>
                <h6>301 Cases</h6>
                </div>
              
              </div>

              <div className={styles.second}>
               <div className={styles.member}>
                <img src={Sanfoleimg}/>
                   <div className={styles.namecases}>
                      <h5>Sanfole</h5>
                       <h6>805 Cases</h6>
                     </div>
                </div>
              </div>

              <div className={styles.member}>
                <img src={Cesfiloimg}/>
                <div className={styles.namecases}>
                <h5>Cesforila</h5>
                <h6>470 Cases</h6>
                </div>
                
              </div>

              <div className={styles.member}>
                <img src={Haldoneimg}/>
                <div className={styles.namecases}>
                <h5>Collen</h5>
                <h6>180 Cases</h6>
                </div>
              </div>

              <div className={styles.member}>
                <img src={Collenimg}/>
                <div className={styles.namecases}>
                <h5>Haldone</h5>
                <h6>212 Cases</h6>
                </div>            
              </div>

              <div className={styles.member}>
                <img src={Nikjoeimg}/>
                <div className={styles.namecases}>
                <h5>Nik Joe</h5>
                <h6>350 Cases</h6>
                </div>         
              </div>
          </div>
          
       </div>
    </div>
  )
}

export default Ourteam