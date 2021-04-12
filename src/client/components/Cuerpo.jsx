import React from 'react'
import styles from '../styles/Cuerpo.css'

const CuadroConImagenes = () => (
  <div className={styles.cuerpo}>
    <div className={styles.imagen1}>
      <div className={styles.vacio} />
      <a href="index.html">
        <img src="https://www.asus.com/WebsitesBanner/global/banners/q7ykqhu9t7myuenh/q7ykqhu9t7myuenh-0_0_desktop_1X.jpg" alt="" />
      </a>
    </div>
    <div className={styles.cuadroDeImagenes}>
      <a href="index.html">
        <img src="https://www.asus.com/WebsitesBanner/global/banners/e7rdeypzns5zonqq/e7rdeypzns5zonqq-0_0_desktop_1X.jpg" alt="" />
      </a>
      <a href="index.html">
        <div className={styles.imagenConTexto1}>
          <div className={styles.textoEnImagen1}>ROG STRIX XG43UQ</div>
          <div className={styles.textoEnImagen2}>World&apos;s First HDMI 2.1 Gaming Monitor</div>
          <div className={styles.textoEnImagen3}>Learn More &gt;</div>
          <img src="https://www.asus.com/WebsitesBanner/global/banners/e7rdeypzns5zonqq/e7rdeypzns5zonqq-3_0_desktop_1X.jpg" alt="" />
        </div>
      </a>
      <a href="index.html">
        <div className={styles.imagenConTexto2}>
          <div className={styles.textoEnImagen1}>ASUS ZenBook Duo14</div>
          <div className={styles.textoEnImagen2}>The laptop of tomorrow</div>
          <div className={styles.textoEnImagen3}>Learn More &gt;</div>
          <img src="https://www.asus.com/WebsitesBanner/global/banners/e7rdeypzns5zonqq/e7rdeypzns5zonqq-2_0_desktop_1X.jpg" alt="" />
        </div>
      </a>
      <a href="index.html">
        <div className={styles.imagenConTexto3}>
          <div className={styles.textoEnImagen1}>ASUS VivoBook S14</div>
          <div className={styles.textoEnImagen2}>Lighten everything</div>
          <div className={styles.textoEnImagen3}>Learn More &gt;</div>
          <img src="https://www.asus.com/WebsitesBanner/global/banners/e7rdeypzns5zonqq/e7rdeypzns5zonqq-1_0_desktop_1X.jpg" alt="" />
        </div>
      </a>
    </div>
  </div>
)

export default CuadroConImagenes
