import React, { Children } from "react";
import styles from "./Unit.module.scss"
import UnitItem from "./UnitItem";

const Unit = (props) => (
   <div className={styles.wrapper}>

      {
         props.data.map((item, i) => (
            <>
               <UnitItem key={i} {...item} />
               { item.id == '1' ?
               <div className={styles.break} >
               
               </div>
               : null}
            </>
         ))
      }


   </div>
)

export default Unit;