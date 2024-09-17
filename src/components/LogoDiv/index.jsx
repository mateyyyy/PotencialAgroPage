import React from 'react'
import logo from '../../assets/logoParaPagina.png'
import styles from './LogoDiv.module.css'

export default function LogoDiv() {
  return (
    <img src={logo} alt="" id={styles.logoImg}/>
  )
}
