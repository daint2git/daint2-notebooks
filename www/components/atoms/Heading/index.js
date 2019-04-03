import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Heading = ({ component: Component, className, color, ...other }) => (
  <Component className={cssModules`root ${Component} ${color} ${className}`} {...other} />
)

Heading.propTypes = {
  component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark', 'primary']),
}

Heading.defaultProps = {
  component: 'h2',
  color: 'dark',
}

export default Heading
