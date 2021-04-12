import React from 'react'
import styles from '../styles/Navegador.css'

const Navegador = () => (
  <div className={styles.navegador}>
    <ul className={styles.cuadro1}>
      <li>
        <a className={styles.nav1} href="index.html">
          <></>
        </a>
      </li>
      <li>
        <a href="index.html">
          Mobile
        </a>
      </li>
      <li>
        <a href="index.html">
          Laptops
        </a>
      </li>
      <li>
        <a href="index.html">
          Display / Desktops
        </a>
      </li>
      <li>
        <a href="index.html">
          Motherboards / Components
        </a>
      </li>
      <li>
        <a href="index.html">
          Networking / IoT / Servers
        </a>
      </li>
      <li>
        <a href="index.html">
          Accesories
        </a>
      </li>
    </ul>
    <ul className={styles.cuadro2}>
      <li>
        <a href="index.html">
          Support
        </a>
      </li>
      <li>
        <a className={styles.nav9} href="index.html">
          <></>
        </a>
      </li>
      <li>
        <a className={styles.nav10} href="index.html">
          <></>
        </a>
      </li>
    </ul>
  </div>
)

export default Navegador
