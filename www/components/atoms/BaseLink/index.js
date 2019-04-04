import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const BaseLink = ({ children, className, variant, ...other }) => {
  let newProps = {}

  if (variant === 'external') {
    newProps = {
      target: '_blank',
      rel: 'noreferrer noopener',
    }
  }

  return (
    <a className={cssModules`root ${className}`} data-variant={variant} {...newProps} {...other}>
      {children}
    </a>
  )
}

BaseLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['external', 'internal', 'anchor']),
}

BaseLink.defaultProps = {
  variant: 'internal',
}

export default BaseLink
