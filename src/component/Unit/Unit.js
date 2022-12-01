import React, { Children } from "react";
import styles from "./Unit.module.scss"
import UnitItem from "./UnitItem";

const Unit = (props) => (
   <ul className={styles.wrapper}>
      {
         props.data.map((item, i) => (
            <UnitItem key={i} {...item} />
         ))
      }
   </ul>
)

export default Unit;