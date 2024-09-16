import React from 'react'
import styles from './TercerApartado.module.css'

export default function TercerApartado() {
  return (
    <div id={styles.PrincipalContainer}>
        <h1 id={styles.quienesSomos}>¿QUIENES SOMOS?</h1>
        <div className={styles.TemplateContainer}>
          <img src="G:\UNViMe\IngSoftwareII\PaginaPotencialAgro\PotencialAgro\src\assets\MenuPrincipalNoBackground.png" alt="" />
        </div>
    </div>
  )
}
