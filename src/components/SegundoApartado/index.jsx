import React from 'react'
import styles from './SegundoApartado.module.css'
import { MdOutlineLineAxis } from "react-icons/md";
import { MdOutlineSensors } from "react-icons/md";
import { BsRobot } from "react-icons/bs";



export default function SegundoApartado() {
  return (
    <div id={styles.PrincipalContainer}>
      <div className={styles.cardContainer}>
        <MdOutlineSensors style={{ width: '5vw', height: 'auto' }}/> 
        <h2 className={styles.h2Title}>Seguimiento de cultivos mediante sensores</h2>
        <p>El sistema recolecta y mostrará los datos de humedad, pH, temperatura, cantidad de luz y nutrientes del suelo, obtenidos a través de los sensores instalados en el campo. </p>
      </div>

      <div className={styles.cardContainer}>   
        <MdOutlineLineAxis style={{ width: '5vw', height: 'auto' }}/>
        <h2 className={styles.h2Title}>Visualización gráfica del análisis de los datos</h2>
        <p>Los datos recolectados por los sensores se mostrarán en forma de gráficos que permitirán al usuario interactuar con ellos. 
        </p>
      </div>

      <div className={styles.cardContainer}>
        <BsRobot style={{ width: '5vw', height: 'auto' }}/>
        <h2 className={styles.h2Title}>Análisis de datos con Inteligencia Artificial</h2>
        <p>Integramos un servicio de inteligencia artificial que analiza los datos recolectados y genera recomendaciones adecuadas para optimizar el rendimiento de los cultivos.
        </p>
      </div>
    </div>
  )
}
