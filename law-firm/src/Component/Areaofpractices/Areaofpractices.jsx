import React from 'react'
import styles from './Areaofpractices.module.css'
import Businesslaw from '../../Assets/businesslaw.png'
import Elderabuse from '../../Assets/elderabuse.png'
import Businesslaw2 from '../../Assets/businesslaw2.png'
import partnershiplaw from '../../Assets/partnershiplaw.png'
import Realestate from '../../Assets/realestatelaw.png'
import Landlorddistribussion from '../../Assets/landlorddistribute.png'

const Areaofpractices = () => {
  return (
    <div className={styles.main}>
        <h2>Area of Practise</h2>

     <div className={styles.flexrows}>
        <div className={styles.firstrow}>
           <div>
              <img src={Businesslaw}/>
              <h3>Businesslaw</h3>
           </div>

           <div>
              <img src={partnershiplaw}/>
              <h4>Partnership LAW</h4>
           </div>
         </div>

         <div className={styles.secondrow}>
           <div>
              <img src={Realestate}/>
              <h3>REAL ESTATE LAW</h3>
           </div>

            <div>
              <img src={Businesslaw2}/>
              <h4>BUSINESS LAW</h4>
            </div>
         </div>

         <div className={styles.thirdrow}>
           <div>
              <img src={Landlorddistribussion}/>
              <h3>LANDLORD DISPUTES</h3>
           </div>

           <div>
              <img src={Elderabuse}/>
              <h4>ELDER ABUSE</h4>
           </div>
         </div>
        </div>

    </div>
  )
}

export default Areaofpractices;