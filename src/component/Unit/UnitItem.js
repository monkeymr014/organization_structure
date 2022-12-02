import React from "react";
import styles from "./UnitItem.module.scss"


const UnitItem = ({name, id, role, boss}) => (
   <div className={styles.wrapper}>
      <p>{id}{boss}</p>
      <p>{name} - {role}</p>
   </div>
)

export default UnitItem;



