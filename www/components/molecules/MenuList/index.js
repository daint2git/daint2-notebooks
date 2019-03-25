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
  <div className={cssModules`menu-item-text`} {...other}>
    {children}
  </div>
)

const MenuList = ({ children, className, style, ...other }) => (
  <div className={cssModules`root`} style={style}>
    <ul className={cssModules`menu-list ${className}`} {...other}>
      {children}
    </ul>
  </div>
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

export { MenuItem, MenuItemIcon, MenuItemText }

MenuList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default MenuList
