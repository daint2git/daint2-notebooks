import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DrawerContext from './DrawerContext'

const DrawerProvider = ({ children, initialOpenDrawer }) => {
  const [opened, onDrawerToggle] = useState(initialOpenDrawer)
  return (
    <DrawerContext.Provider value={{ opened, onDrawerToggle }}>{children}</DrawerContext.Provider>
  )
}

DrawerProvider.propTypes = {
  children: PropTypes.node,
  initialOpenDrawer: PropTypes.bool,
}

DrawerProvider.defaultProps = {
  initialOpenDrawer: true,
}

export default DrawerProvider
