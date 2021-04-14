/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/GaleriaDeImagenes.css'

const GaleriaDeImagenes = ({ links }) => {
  let llave = 1
  let cont = 0
  const siguienteLlave = () => {
    llave += 1
    return (llave - 1).toString()
  }
  const elementos = (array) => (
    array.map(([link, imagen]) => {
      const style = {
        left: `${cont * 100}vw`,
      }
      cont += 1
      return (
        <a href={link} key={siguienteLlave()} style={style}>
          <img src={imagen} alt="" />
        </a>
      )
    })
  )
  const [activo, setActivo] = React.useState(0)
  const [estilo, setEstilo] = React.useState(styles.botonNoActivo)
  const galeriaStyle = {
    right: `${activo * 100}vw`,
  }
  const botonCorribleIzq = {
    left: `${activo * 100}vw`,
  }
  const botonCorribleDer = {
    left: `${96.85 + (activo * 100)}vw`,
  }
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
    <div className={styles.galeria} style={galeriaStyle}>
      <div className={styles.panelButton} onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave} style={botonCorribleIzq}>
        <button type="button" onClick={onHandleClickLeft} className={estilo}>{'<'}</button>
      </div>
      {elementos(links)}
      <div className={styles.panelButton} onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave} style={botonCorribleDer}>
        <button type="button" onClick={onHandleClickRight} className={estilo}>{'>'}</button>
      </div>
    </div>
  )
}

GaleriaDeImagenes.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
export default GaleriaDeImagenes
