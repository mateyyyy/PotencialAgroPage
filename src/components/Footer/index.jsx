import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h3>About Us</h3>
        <p>We are dedicated to bringing the best agricultural solutions.</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul className={styles.links}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Contact</h3>
        <p>Email: info@potencialagro.com</p>
        <p>Phone: +123 456 789</p>
      </div>
    </div>
    <div className={styles.footerBottom}>
      &copy; {new Date().getFullYear()} Potencial Agro. All rights reserved.
    </div>
  </footer>
  )
}
