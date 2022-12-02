import React, { Children } from "react";
import styles from "./Unit.module.scss"
import UnitItem from "./UnitItem";

const Unit = (props) => (
   <div className={styles.wrapper}>
      {
         props.data.map((item, i, arr) => (
            <>
               {arr[i - 1]?.position != item.position
                  ?
                  <span className={styles.break} />
                  : null}
               <UnitItem key={i} {...item} />
            </>
         ))
      }
   </div>
)

export default Unit;