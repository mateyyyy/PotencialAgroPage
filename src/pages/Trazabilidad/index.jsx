import React from 'react'
import styles from './Trazabilidad.module.css'
import { Link } from 'react-router-dom'

export default function Trazabilidad() {
  return (<>
    <div id={styles.PrinDiv}>
        <embed src="./Matriz Trazabilidad (1).pdf" type="" width="100%" height="100%"/>
    </div>

    <div id={styles.iconosSuperiores}>
        <img src="./logo_potencial_agro.svg" alt="" id={styles.logo}/>
        <Link to={"/"}><button id={styles.volverBoton}>Volver a la Potencial Agro</button></Link>
    </div>

  </>
  )
}
