import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ToolBar = ({ children, className, ...other }) => (
  <div className={cssModules`root ${className}`} {...other}>
    {children}
  </div>
)

ToolBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ToolBar
