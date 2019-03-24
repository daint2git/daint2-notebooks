import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Spacer = ({ size, ...other }) => (
  <div className={cssModules`${size}`} {...other} />
)

Spacer.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Spacer.defaultProps = {
  size: 'medium',
}

export default Spacer
