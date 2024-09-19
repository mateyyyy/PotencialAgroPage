import React from 'react'
import styles from './ProyectoApartado.module.css'
import { RiOrganizationChart } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { GiArrowScope } from "react-icons/gi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PiListNumbersFill } from "react-icons/pi";


export default function ProyectoApartado() {
  return (
    <div id={styles.GralContainer}>
      <h1 id={styles.titulo}>MANUALES Y DOCUMENTOS</h1>
      <div id={styles.PrinDiv}>
          <Link to={"/edt"} className={styles.link}>
            <div className={styles.cardInfo}>
              <RiOrganizationChart style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>EDT/WBS</h3>
            </div>
          </Link>
          
          <Link to={"/alcance"} className={styles.link}>
            <div className={styles.cardInfo}>
              <GiArrowScope style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>ALCANCE DEL PROYECTO</h3>
            </div>
          </Link>

          <Link to={"/acta"} className={styles.link}>
            <div className={styles.cardInfo}>
              <GrDocumentUser style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>ACTA DE CONSTITUCION</h3>
            </div>
          </Link>

          <Link to={"/requisitos"} className={styles.link}>
            <div className={styles.cardInfo}>
              <HiClipboardDocumentCheck  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DOCUMENTO DE REQUISITOS</h3>
            </div>
          </Link>

          <Link to={"/trazabilidad"} className={styles.link}>
            <div className={styles.cardInfo}>
              <PiListNumbersFill  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>Matriz de trazabilidad</h3>
            </div>
          </Link>
      </div>

    </div>
  )
}
