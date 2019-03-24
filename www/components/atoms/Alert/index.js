import React from 'react'
import PropTypes from 'prop-types'

import { COLORS } from 'constants/global'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Alert = ({ children, className, color, variant, ...other }) => (
  <div
    className={cssModules`root ${color} ${className}`}
    data-variant={variant}
    {...other}
  >
    {children}
  </div>
)

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  variant: PropTypes.oneOf(['outline']),
}

Alert.defaultProps = {
  color: 'primary',
}

export default Alert
