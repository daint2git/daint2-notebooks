import React from 'react'
import PropTypes from 'prop-types'

import { COLORS, SIZES } from 'constants/global'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Button = ({
  component: Component,
  children,
  className,
  color,
  size,
  variant,
  isFullWidth,
  hidden,
  ...other
}) => {
  if (hidden) {
    return null
  }

  return (
    <Component
      className={cssModules`root ${color} ${size} ${className}`}
      data-variant={variant}
      data-full-width={isFullWidth}
      {...other}
    >
      {children}
    </Component>
  )
}

Button.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([...COLORS, 'light', 'dark']),
  size: PropTypes.oneOf(SIZES),
  variant: PropTypes.oneOf(['outline', 'text']),
  isFullWidth: PropTypes.bool,
  hidden: PropTypes.bool,
}

Button.defaultProps = {
  component: 'button',
  type: 'button',
  color: 'primary',
  size: 'medium',
  isFullWidth: false,
  hidden: false,
}

export default Button
