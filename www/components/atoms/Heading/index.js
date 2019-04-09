import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Heading = React.forwardRef((props, ref) => {
  const { component: Component, className, color, hasEllipsis, ...other } = props
  return (
    <Component
      className={cssModules`root ${Component} ${color} ${className}`}
      data-ellipsis={hasEllipsis}
      ref={ref}
      {...other}
    />
  )
})

Heading.propTypes = {
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark', 'primary']),
  hasEllipsis: PropTypes.bool,
}

Heading.defaultProps = {
  component: 'h2',
  color: 'dark',
  hasEllipsis: false,
}

export default Heading
