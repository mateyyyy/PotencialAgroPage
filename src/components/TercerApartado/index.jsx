import React from 'react'
import styles from './TercerApartado.module.css'

export default function TercerApartado() {
  return (
    <div id={styles.PrincipalContainer}>
        <h1 id={styles.titulo}>DESCARGA LA APP</h1>
        <div id={styles.capturas}>
          <img src='./MenuPrincipalV1,4NoFondo.png' alt="" className={styles.captura} />
          <img src='./Notificacion Riego.png' alt="" className={styles.captura} />
        </div>
        <div id={styles.downloadSites}>
          <img src="./DownloadAppStore.png" alt="" id={styles.downloadAPP} />
          <img src="./DownloadPlayStore.png" alt="" id={styles.downloadAPP} />
        </div>
    </div>
  )
}
