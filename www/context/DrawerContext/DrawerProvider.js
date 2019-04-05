import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DrawerContext from './DrawerContext'

const DrawerProvider = ({ children, initialOpen }) => {
  const [opened, onToggle] = useState(initialOpen)
  return <DrawerContext.Provider value={{ opened, onToggle }}>{children}</DrawerContext.Provider>
}

DrawerProvider.propTypes = {
  children: PropTypes.node,
  initialOpen: PropTypes.bool,
}

DrawerProvider.defaultProps = {
  initialOpen: true,
}

export default DrawerProvider
