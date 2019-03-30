import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const AppBar = ({ children, className, position, color, ...other }) => (
  <header className={cssModules`root ${position} ${color} ${className}`} {...other}>
    {children}
  </header>
)

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['static', 'fixed', 'relative']),
  color: PropTypes.oneOf(['primary', 'inverse']),
}

AppBar.defaultProps = {
  position: 'fixed',
  color: 'primary',
}

export default AppBar
