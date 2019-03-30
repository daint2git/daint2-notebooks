import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const MenuItem = ({ children, className, ...other }) => (
  <li className={cssModules`menu-item ${className}`} {...other}>
    {children}
  </li>
)

const MenuItemIcon = ({ children, ...other }) => (
  <div className={cssModules`menu-item-icon`} {...other}>
    {children}
  </div>
)

const MenuItemText = ({ children, ...other }) => (
  <span className={cssModules`menu-item-text`} {...other}>
    {children}
  </span>
)

const MenuList = ({ children, className, ...other }) => (
  <ul className={cssModules`menu-list ${className}`} {...other}>
    {children}
  </ul>
)

MenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

MenuItemIcon.propTypes = {
  children: PropTypes.node,
}

MenuItemText.propTypes = {
  children: PropTypes.node,
}

MenuList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export { MenuItem, MenuItemIcon, MenuItemText }

export default MenuList
