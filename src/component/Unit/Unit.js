import React, { Children } from "react";
import styles from "./Unit.module.scss"
import UnitItem from "./UnitItem";

class Unit extends React.Component {




   

   render() {

         for(let k = 0; k < this.props.data.length;k++) {
            console.log(this.props.data[k].bossId)

      }
      return(
         <p>aaa</p>
      )
   }




}



        /*  props.data.map((item, i, arr) => (
            <>
               {arr[i - 1]?.position != item.position
                  ?
                  <span className={styles.break} />
                  : null}
               <UnitItem key={i} {...item} />
            </>
         )) */
               
            

export default Unit;