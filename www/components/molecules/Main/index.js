import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Main(props) {
  const { children, className, ...other } = props
  return (
    <main className={cssModules`root ${className}`} {...other}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Main
