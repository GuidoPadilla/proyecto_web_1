/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/GaleriaDeImagenes.css'

const GaleriaDeImagenes = ({ links }) => {
  /*
  let llave = 1
  const siguienteLlave = () => {
    llave += 1
    return (llave - 1).toString()
  }
  const elementos = () => {
    links.map(([link, imagen]) => (
      <a href={link} key={siguienteLlave()}>
        <img src={imagen} alt="" />
      </a>
    ))
  }
  */
  const [activo, setActivo] = React.useState(0)
  const [estilo, setEstilo] = React.useState(styles.botonNoActivo)

  const onHandleClickRight = () => {
    setActivo((activo + 1) % links.length)
  }

  const onHandleClickLeft = () => {
    if (activo === 0) {
      setActivo(3)
    } else {
      setActivo(activo - 1)
    }
  }

  const onHandleMouseEnter = () => {
    setEstilo(styles.botonActivo)
  }

  const onHandleMouseLeave = () => {
    setEstilo(styles.botonNoActivo)
  }

  return (
    <div className={styles.galeria}>
      <div className={styles.panelButton} onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave}>
        <button type="button" onClick={onHandleClickLeft} className={estilo}>{'<'}</button>
      </div>
      <a href={links[activo][0]}>
        <img src={links[activo][1]} alt="" />
      </a>
      <div className={styles.panelButton} onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave}>
        <button type="button" onClick={onHandleClickRight} className={estilo}>{'>'}</button>
      </div>
    </div>
  )
}

GaleriaDeImagenes.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
export default GaleriaDeImagenes
