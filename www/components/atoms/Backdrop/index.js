import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Backdrop(props) {
  const { className, type, ...other } = props
  return <div className={cssModules`root ${className} ${type}`} {...other} />
}

Backdrop.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['outer', 'inner']),
}

Backdrop.defaultProps = {
  type: 'outer',
}

export default Backdrop
