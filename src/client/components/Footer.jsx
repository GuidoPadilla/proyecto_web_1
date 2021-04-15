import React from 'react'
import styles from '../styles/Footer.css'

const Footer = () => {
  let llave = 1
  const siguienteLlave = () => {
    llave += 1
    return (llave - 1).toString()
  }
  const enlistar = (array) => (
    array.map(([titulo, esTitulo]) => {
      if (esTitulo === true) {
        return <li key={siguienteLlave()}><div className={styles.subTitulo}>{titulo}</div></li>
      }
      return <li key={siguienteLlave()}><a href="index.html">{titulo}</a></li>
    })
  )
  return (
    <div className={styles.footer}>
      <div className={styles.division_1}>
        <div className={styles.columna}>
          <div className={styles.titulo}>Shop and Learn</div>
          <ul>
            {
              enlistar([['Mobile', true], ['Phones', false], ['Wearable & Healthcare', false], ['Accesories', false], ['Laptop', true], ['For Home', false], ['For Work', false], ['For Creators', false], ['For Students', false], ['For Gaming', false], ['Acceosries', false], ['Displays/Destkop', true], ['Monitors', false], ['Projectors', false], ['All-in-One PCs', false], ['Tower PCs', false], ['Gaming Tower PCs', false], ['Mini PCs', false]])
            }
          </ul>
        </div>
        <div className={styles.columna}>
          <ul>
            {
              enlistar([['Workstations', false], ['Accesories', false], ['Motherboards & Components', true], ['Motherboards', false], ['Graphic Cards', false], ['Gaming Cases', false], ['Cooling', false], ['Power Supply Units', false], ['Sound cards', false], ['Optical Drives', false], ['Data Storage', false], ['External Graphic Docks', false], ['Networking/Iot/Servers', true], ['WiFi Routers', false], ['Whole Home Mesh WiFi Systems', false]])
            }
          </ul>
        </div>
        <div className={styles.columna}>
          <ul>
            {
              enlistar([['Wired Networking', false], ['Intelligent Robots', false], ['AIoT & Industrial Solutions', false], ['Servers', false], ['Smart Home', false], ['Accesories', true], ['Keyboards', false], ['Mice and Mouse Pads', false], ['Headsets and Audio', false], ['Streaming Kits', false], ['Apparels Bags and Gears', false], ['Cases and Protection', false], ['Adapters and Charges', false], ['Docks Dongles and Cable', false], ['Gimbal', false]])
            }
          </ul>
        </div>
        <div className={styles.columna}>
          <div className={styles.titulo}>Learn More</div>
          <ul>
            {
              enlistar([['Asus Design Center', false], ['ASUSPRO', false], ['Automotive Solutions', false]])
            }
          </ul>
          <div className={styles.titulo}>Support</div>
          <ul>
            {
              enlistar([['Check Repair Status', false], ['Find Service Locations', false], ['Production Registration', false], ['Email Us', false], ['Call Us', false], ['Security Advisory', false], ['ASUS Support Videos', false], ['MyASUS', false]])
            }
          </ul>
        </div>
        <div className={styles.columna}>
          <div className={styles.titulo}>About Us</div>
          <ul>
            {
              enlistar([['About ASUS', false], ['News', false], ['Investor Relations', false], ['About CSR for global', false], ['Press Room', false], ['ASUSTOR Inc.', false], ['ASUS Cloud Corporation', false], ['UniMax Electronics Inc.', false]])
            }
          </ul>
        </div>
        <div className={styles.columna}>
          <div className={styles.titulo}>Community</div>
          <div className={styles.columnaGrid}>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Instagram.svg" alt="" />
            </a>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-YouTube.svg" alt="" />
            </a>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-facebook.svg" alt="" />
            </a>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Twitter.svg" alt="" />
            </a>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-LinkedIn.svg" alt="" />
            </a>
            <a href="index.html">
              <img src="https://www.asus.com/media/odin/websites/global/SocialMedia/social-Pinterest.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.finalFooter}>
        <div className={styles.part}>
          <a href="index.html">Terms of Use Notice</a>
          <a href="index.html">Privacy Policy</a>
          <div>©ASUSTeK Computer Inc. All rights reserved.</div>
        </div>
        <div className={styles.part}>
          <a href="index.html">
            <img src="https://www.asus.com/images/footer/global.svg" alt="" />
          </a>
          <a href="index.html">
            Global / English
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
