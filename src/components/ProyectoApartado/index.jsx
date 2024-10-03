import React from 'react'
import styles from './ProyectoApartado.module.css'
import { RiOrganizationChart } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { GiArrowScope } from "react-icons/gi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PiListNumbersFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { IoAlertCircleSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";


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
              <h3 className={styles.cardInfoH3}>MATRIZ DE TRAZABILIDAD</h3>
            </div>
          </Link>

          <Link to={"/diccionario"} className={styles.link}>
            <div className={styles.cardInfo}>
              <FaBook  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DICCIONARIO EDT</h3>
            </div>
          </Link>

          <Link to={"/matrizRiesgo"} className={styles.link}>
            <div className={styles.cardInfo}>
              <IoAlertCircleSharp  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>MATRIZ DE RIESGOS</h3>
            </div>
          </Link>

          <Link to={"/adquisiciones"} className={styles.link}>
            <div className={styles.cardInfo}>
              <FaShoppingBag  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DOCUMENTO DE ADQUISICIONES</h3>
            </div>
          </Link>

      </div>

    </div>
  )
}
