import React from 'react'
import styles from './SegundoApartado.module.css'
import { MdOutlineLineAxis } from "react-icons/md";
import { MdOutlineSensors } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";


export default function SegundoApartado() {
  return (
    <div id={styles.PrincipalContainer}>
      <div className={styles.cardContainer}>
        <MdOutlineSensors className={styles.icon}/> 
        <h2 className={styles.h2Title}>Seguimiento de cultivos mediante sensores</h2>
        <p>El sistema recolecta y mostrará los datos de humedad, pH, temperatura, cantidad de luz y nutrientes del suelo, obtenidos a través de los sensores distribuidos en el campo. </p>
      </div>

      <div className={styles.cardContainer}>   
        <MdOutlineLineAxis className={styles.icon}/>
        <h2 className={styles.h2Title}>Visualización gráfica del análisis de los datos</h2>
        <p>Los datos recolectados por los sensores se mostrarán en forma de gráficos que permitirán al usuario interactuar con ellos. 
        </p>
      </div>

      <div className={styles.cardContainer}>
        <BsRobot className={styles.icon}/>
        <h2 className={styles.h2Title}>Análisis de datos mediante Inteligencia Artificial</h2>
        <p>Integramos un servicio de inteligencia artificial que analiza los datos recolectados y genera recomendaciones adecuadas para optimizar el rendimiento de los cultivos.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <IoMdNotifications  className={styles.icon}/>
        <h2 className={styles.h2Title}>Recomendaciones y notificaciones de alertas</h2>
        <p>Implementamos alertas personalizadas que notifican riesgos potenciales y sugieren acciones preventivas para asegurar la salud de los cultivos
        </p>
      </div>

    </div>
  )
}
