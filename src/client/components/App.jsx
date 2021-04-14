import React from 'react'
import Navegador from './Navegador'
import Encabezado from './Encabezado'
import GaleriaDeImagenes from './GaleriaDeImagenes'
import ImagenesFinales from './ImagenesFinales'

import styles from '../styles/App.css'
import Cuerpo from './Cuerpo'
import Footer from './Footer'

const App = () => (
  <div className={styles.App}>
    <Encabezado />
    <Navegador valores={['df']} />
    <GaleriaDeImagenes links={[['', 'https://www.asus.com/WebsitesBanner/global/banners/ezianbg8hccqdlng/ezianbg8hccqdlng-0_0_desktop_1X.jpg'], ['', 'https://www.asus.com/WebsitesBanner/global/banners/ogkfh4kphsb9ss8s/ogkfh4kphsb9ss8s-0_0_desktop_1X.jpg'], ['', 'https://www.asus.com/WebsitesBanner/global/banners/lxchxshnav9vsip3/lxchxshnav9vsip3-0_0_desktop_1X.png'], ['', 'https://www.asus.com/WebsitesBanner/global/banners/gzrw1ypsiwulgf5r/gzrw1ypsiwulgf5r-0_0_desktop_1X.jpg']]} />
    <Cuerpo />
    <ImagenesFinales />
    <Footer />
  </div>
)

export default App
