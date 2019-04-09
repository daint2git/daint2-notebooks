import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SideBarContext from './SideBarContext'

const SideBarProvider = ({ children, initialOpen }) => {
  const [opened, onToggle] = useState(initialOpen)
  return <SideBarContext.Provider value={{ opened, onToggle }}>{children}</SideBarContext.Provider>
}

SideBarProvider.propTypes = {
  children: PropTypes.node,
  initialOpen: PropTypes.bool,
}

SideBarProvider.defaultProps = {
  initialOpen: true,
}

export default SideBarProvider
