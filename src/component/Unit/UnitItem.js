import React from "react";
import styles from "./UnitItem.module.scss"


const UnitItem = ({name, id}) => (
   <div className={styles.wrapper}>
      <p>Jednostka</p>
      <p>{name} - {id}</p>
   </div>
)

export default UnitItem;



/* 
   
   1. Wymyślenie struktóry danych. (każde dziecko musi wiedzieć jakiego ma rodzica). Główny rodzic FRSE
   2. Dodanie stylu tak aby każde dziecko było niżej od rodzica (position).
   3. W unicie zawarcie pracowników (odzielna tablica).       
   
   UnitItems - komórka (jak rozdzielić żeby każdy Unit wiedział kim jest)
      [dodanie strukóry]
         -  Dyrektor Głowny
         -  Dyrektor 
         -  Koordynator
         -  Pracownik

   4. Dodanie modułu dodawania Unitów.
*/