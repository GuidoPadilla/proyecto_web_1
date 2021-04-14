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
    left: `${96.8 + (activo * 100)}vw`,
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
        <div type="button" tabIndex={0} onClick={onHandleClickLeft} className={estilo} role="button" onKeyDown={() => {}}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA1NCI+DQogICAgPHJlY3Qgd2lkdGg9IjM5IiBoZWlnaHQ9IjUzIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiIHN0cm9rZT0iIzE4MTgxOCIgcng9IjMuNSIvPg0KICAgIDxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjQuNSAzNi45NzVMMTQuNTI1IDI3bDkuOTc1LTkuOTc1Ii8+DQo8L3N2Zz4NCg==" alt="" />
        </div>
      </div>
      {elementos(links)}
      <div className={styles.panelButton} onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave} style={botonCorribleDer}>
        <div type="button" tabIndex={0} onClick={onHandleClickRight} className={estilo} role="button" onKeyDown={() => {}}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDAgNTQiPg0KICAgIDxyZWN0IHdpZHRoPSIzOSIgaGVpZ2h0PSI1MyIgeD0iLjUiIHk9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii40IiBzdHJva2U9IiMxODE4MTgiIHJ4PSIzLjUiLz4NCiAgICA8cGF0aCBzdHJva2U9IiMxODE4MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE1LjUgMTcuMDI1TDI1LjQ3NSAyNyAxNS41IDM2Ljk3NSIvPg0KPC9zdmc+DQo=" alt="" />
        </div>
      </div>
    </div>
  )
}

GaleriaDeImagenes.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
export default GaleriaDeImagenes
