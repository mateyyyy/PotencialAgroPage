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
import { TfiShoppingCartFull } from "react-icons/tfi";
import { CiViewTimeline } from "react-icons/ci";
import { FaPersonRays } from "react-icons/fa6";
import { GrLink } from "react-icons/gr";
import { GrDocumentConfig } from "react-icons/gr";


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
          
          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/819264/Enunciado+del+Alcance+del+Proyecto" className={styles.link}>
            <div className={styles.cardInfo}>
              <GiArrowScope style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>ALCANCE DEL PROYECTO</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/885073/Acta+de+Constituci+n+del+Proyecto" className={styles.link}>
            <div className={styles.cardInfo}>
              <GrDocumentUser style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>ACTA DE CONSTITUCION</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/852285/Documento+de+Requisitos" className={styles.link}>
            <div className={styles.cardInfo}>
              <HiClipboardDocumentCheck  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DOCUMENTO DE REQUISITOS</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/819615/Matriz+de+trazabilidad" className={styles.link}>
            <div className={styles.cardInfo}>
              <PiListNumbersFill  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>MATRIZ DE TRAZABILIDAD</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/2556106/Diccionario+EDT" className={styles.link}>
            <div className={styles.cardInfo}>
              <FaBook  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DICCIONARIO EDT</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/852482/Matriz+de+Riesgos" className={styles.link}>
            <div className={styles.cardInfo}>
              <IoAlertCircleSharp  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>MATRIZ DE RIESGOS</h3>
            </div>
          </a>

          <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/917674/Descripci+n+de+adquisiciones" className={styles.link}>
          <div className={styles.cardInfo}>
              <FaShoppingBag  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>DOCUMENTO DE ADQUISICIONES</h3>
            </div>
          </a>

        <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/98536/Gesti+n+de+los+costos+del+proyecto" className={styles.link}>
        <div className={styles.cardInfo}>
              <TfiShoppingCartFull  style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>GESTION DE COSTOS DEL PROYECTO</h3>
            </div>
        </a>

        <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/918312/Gesti+n+del+cronograma" className={styles.link}>
        <div className={styles.cardInfo}>
              <CiViewTimeline   style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>GESTION DEL CRONOGRAMA</h3>
            </div>
        </a>

        <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/819450/Perfil+del+l+der+del+proyecto" className={styles.link}>
        <div className={styles.cardInfo}>
              <FaPersonRays    style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>PERFIL DEL LIDER DEL PROYECTO</h3>
            </div>
        </a>

        <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/852566/Actividades+de+Integraci+n" className={styles.link}>
        <div className={styles.cardInfo}>
              <GrLink    style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>ACTIVIDADES DE INTEGRACION</h3>
            </div>
        </a>

        <a href="https://potencialagro.atlassian.net/wiki/spaces/PA/pages/2785290/Gesti+n+de+la+Configuraci+n" className={styles.link}>
        <div className={styles.cardInfo}>
              <GrDocumentConfig     style={{ width: '5vw', height: 'auto' }}/>
              <h3 className={styles.cardInfoH3}>GESTION DE LA CONFIGURACION</h3>
            </div>
        </a>



      </div>

    </div>
  )
}
