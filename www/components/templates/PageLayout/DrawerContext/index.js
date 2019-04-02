import React from 'react'
import PropTypes from 'prop-types'

const DrawerContext = React.createContext()

const DrawerProvider = ({ children, initialValue }) => {
  const [isVisibleDrawer, setVisibleDrawer] = React.useState(initialValue)
  return (
    <DrawerContext.Provider value={{ isVisibleDrawer, setVisibleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

DrawerProvider.propTypes = {
  children: PropTypes.node,
  initialValue: PropTypes.bool,
}

DrawerProvider.defaultProps = {
  initialValue: true,
}

export { DrawerProvider }
export default DrawerContext
