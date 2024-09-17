import React from 'react'
import styles from './ProyectoApartado.module.css'
import { RiOrganizationChart } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { GiArrowScope } from "react-icons/gi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";


export default function ProyectoApartado() {
  return (
    <>
      <h1 id={styles.titulo}>MANUALES Y DOCUMENTOS</h1>
        <div id={styles.PrinDiv}>
          <div className={styles.Card}>
            <a href="">
              <div className={styles.cardInfo}>
                <RiOrganizationChart style={{ width: '5vw', height: 'auto' }}/>
                <h3 className={styles.cardInfoH3}>ORGANIGRAMA</h3>
              </div>
            </a>

            <a href="">
              <div className={styles.cardInfo}>
                <GiArrowScope style={{ width: '5vw', height: 'auto' }}/>
                <h3 className={styles.cardInfoH3}>ALCANCE DEL PROYECTO</h3>
              </div>
            </a>

          </div>

          <div className={styles.Card}>
            <a href="">
              <div className={styles.cardInfo}>
                <GrDocumentUser style={{ width: '5vw', height: 'auto' }}/>
                <h3 className={styles.cardInfoH3}>ACTA DE CONSTITUCION</h3>
              </div>
            </a>

            <a href="">
              <div className={styles.cardInfo}>
                <HiClipboardDocumentCheck  style={{ width: '5vw', height: 'auto' }}/>
                <h3 className={styles.cardInfoH3}>DOCUMENTO DE REQUISITOS</h3>
              </div>
            </a>
          </div>
        </div>
    </>
  )
}
