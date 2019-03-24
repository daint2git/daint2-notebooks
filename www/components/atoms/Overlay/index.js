import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Overlay = ({ className, ...other }) => (
  <div className={cssModules`root ${className}`} {...other} />
)

Overlay.propTypes = {
  className: PropTypes.string,
}

export default Overlay
