import React from 'react'
import PropTypes from 'prop-types'

const Contenedor = ({
  image, width, height, direction, children,
}) => {
  const direccion = (prueba) => {
    if (prueba === 'none') {
      return 'none'
    }
    return `url(${image})`
  }
  const style = {
    display: 'flex',
    backgroundImage: `${direccion(image)}`,
    backgroundRepeat: 'no-repeat',
    width: `${width}`,
    height: `${height}`,
    flexDirection: `${direction}`,
  }
  return <div style={style}>{children}</div>
}

Contenedor.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

Contenedor.defaultProps = {
  image: 'none',
}

export default Contenedor
