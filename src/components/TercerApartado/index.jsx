import React from 'react'
import styles from './TercerApartado.module.css'

export default function TercerApartado() {
  return (
    <div id={styles.PrincipalContainer}>
        <h1 id={styles.quienesSomos}>DESCARGA LA APP</h1>
        <img src='./MenuPrincipalV1.3NoFondo.png' alt="" id={styles.capturaMain} />
        <div id={styles.downloadSites}>
          <img src="./DownloadAppStore.png" alt="" id={styles.downloadAPP} />
          <img src="./DownloadPlayStore.png" alt="" id={styles.downloadAPP} />
        </div>
    </div>
  )
}
