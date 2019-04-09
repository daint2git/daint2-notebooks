import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function SideBar(props) {
  const { children, className, opened, ...other } = props

  if (!opened) {
    return null
  }

  return (
    <aside className={cssModules`root ${className}`} {...other}>
      {children}
    </aside>
  )
}

SideBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  opened: PropTypes.bool,
}

SideBar.defaultProps = {
  opened: false,
}

export default SideBar
