import React from 'react'
import styles from '../styles/Encabezado.css'

const Encabezado = () => (
  <div className={styles.encabezado}>
    <ul className={styles.titulo1}>
      <li>
        <a className={styles.imagen1} href="index.html">
          <></>
        </a>
      </li>
      <li className={styles.imagenMarginada}>
        <a className={styles.imagen2} href="index.html">
          <></>
        </a>
      </li>
    </ul>
    <ul className={styles.titulo2}>
      <li>
        <a className={styles.link3} href="index.html">
          Gaming
        </a>
      </li>
      <li>
        <a className={styles.link4} href="index.html">
          Business
        </a>
      </li>
    </ul>
  </div>
)

export default Encabezado
