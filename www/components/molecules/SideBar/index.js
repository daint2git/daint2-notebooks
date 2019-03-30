import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const SideBar = ({ children, className, ...other }) => (
  <aside className={cssModules`root ${className}`} {...other}>
    {children}
  </aside>
)

SideBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default SideBar
