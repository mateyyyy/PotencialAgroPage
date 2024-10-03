import React from 'react';
import styles from './Adquisiciones.module.css';
import { Link } from "react-router-dom";


export default function Adquisiciones() {
  return (
    <div id={styles.PrinDiv}>
      <embed
        src="/Adquisiciones.pdf" // Asegúrate de colocar el archivo en la carpeta public
        type="application/pdf"
        width="100%"
        height="90%"
      />
      <div id={styles.iconosSuperiores}>
        <img src="./logo_potencial_agro.svg" alt="" id={styles.logo}/>
        <Link to={"/"}><button id={styles.volverBoton}>Volver a la Potencial Agro</button></Link>
      </div>
    </div>
  );
}
