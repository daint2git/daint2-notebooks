import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Button = ({
  classes,
  color = 'primary',
  size = 'medium',
  variant,
  hidden,
  ...other
}) => {
  if (hidden) {
    return null
  }

  return (
    <button
      type="button"
      className={cssModules`root ${color} ${size} ${classes}`}
      data-variant={variant}
      {...other}
    />
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'danger',
    'success',
    'warning',
    'inverse',
    'light',
    'dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outline', 'text']),
}

export default Button
