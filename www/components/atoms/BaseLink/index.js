import { SIZES } from 'constants/global'

import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const BaseLink = React.forwardRef((props, ref) => {
  const { children, className, size, variant, hasEllipsis, ...other } = props

  if (variant === 'external') {
    other.target = '_blank'
    other.rel = 'noreferrer noopener'
  }

  return (
    <a
      className={cssModules`root ${className} ${size}`}
      data-variant={variant}
      data-ellipsis={hasEllipsis}
      ref={ref}
      {...other}
    >
      {children}
    </a>
  )
})

BaseLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  variant: PropTypes.oneOf(['external', 'internal', 'anchor']),
  hasEllipsis: PropTypes.bool,
}

BaseLink.defaultProps = {
  size: 'base-large',
  variant: 'internal',
}

export default BaseLink
