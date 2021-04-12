/* eslint-disable max-len */
import React from 'react'
import styles from '../styles/ImagenesFinales.css'

const App = () => (
  <div className={styles.imagenesFinales}>
    <div className={styles.Galeria}>
      <h2 className={styles.titulo}>Campaings and Events</h2>
      <a href="index.html">See all &gt;</a>
      <div className={styles.imagenesGaleria}>
        <a href="index.html">
          <img src="https://www.asus.com/media/Odin/Websites/global/SiteSetting/20210319021438.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>ASUS Chromebox 2 (CN62) Upgrade Program</div>
        </a>
        <a href="index.html">
          <img src="https://www.asus.com/media/Odin/Websites/global/SiteSetting/20210331032556.png" alt="" />
          <div className={styles.textoImagenGaleria}>Rate Your Gear</div>
        </a>
        <a href="index.html">
          <img src="https://www.asus.com/media/Odin/Websites/global/SiteSetting/20201105111458.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>Tinker Board Forum</div>
        </a>
        <button type="button">&gt;</button>
      </div>
    </div>
    <div className={styles.Cuadro}>
      <a className={styles.cuadroTextoGrande} href="index.html">
        <img src="https://rog.asus.com/media/1617746696902.jpg" alt="" />
        <div className={styles.textoImagenGaleria}>
          <div className={styles.titulo}>
            Armored ‘Mechs, deep strategy, and galactic adventure abound in Battletech
          </div>
          <div className={styles.cuerpo}>
            With its gigantic, customizable robots, compelling strategy, and rich universe, Battletech offers countless hours of tactical gameplay, and its inventive modding community adds many more.
          </div>
        </div>
      </a>
      <div className={styles.imagenesFinalesGrid}>
        <a href="index.html">
          <img src="https://rog.asus.com/media/16171389207.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>
            <div className={styles.titulo}>
              Outriders explores a supernatural conflict on the far reaches of an alien planet
            </div>
            <div className={styles.cuerpo}>
              Square Enix&lsquo;s Outriders blends supernatural abilities and harrowing conflict on a far-flung world.
            </div>
          </div>
        </a>
        <a href="index.html">
          <img src="https://rog.asus.com/media/1617248057491.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>
            <div className={styles.titulo}>
              Armored ‘Mechs, deep strategy, and galactic adventure abound in Battletech
            </div>
            <div className={styles.cuerpo}>
              With its gigantic, customizable robots, compelling strategy, and rich universe, Battletech offers countless hours of tactical gameplay, and its inventive modding community adds many more.
            </div>
          </div>
        </a>
        <a href="index.html">
          <img src="https://rog.asus.com/media/1614152624207.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>
            <div className={styles.titulo}>
              Armored ‘Mechs, deep strategy, and galactic adventure abound in Battletech
            </div>
            <div className={styles.cuerpo}>
              With its gigantic, customizable robots, compelling strategy, and rich universe, Battletech offers countless hours of tactical gameplay, and its inventive modding community adds many more.
            </div>
          </div>
        </a>
        <a href="index.html">
          <img src="https://rog.asus.com/media/1616665434702.jpg" alt="" />
          <div className={styles.textoImagenGaleria}>
            <div className={styles.titulo}>
              Armored ‘Mechs, deep strategy, and galactic adventure abound in Battletech
            </div>
            <div className={styles.cuerpo}>
              With its gigantic, customizable robots, compelling strategy, and rich universe, Battletech offers countless hours of tactical gameplay, and its inventive modding community adds many more.
            </div>
          </div>
        </a>
      </div>
      <button type="button">&gt;</button>
    </div>
  </div>
)

export default App
