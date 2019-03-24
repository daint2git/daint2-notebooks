import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Divider = ({ className, ...other }) => (
  <hr className={cssModules`root ${className}`} {...other} />
)

Divider.propTypes = {
  className: PropTypes.string,
}

export default Divider
