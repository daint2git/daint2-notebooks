import { SIZES } from 'constants/global'

import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Spacer = ({ component: Component, size, ...other }) => (
  <Component className={cssModules`${size}`} {...other} />
)

Spacer.propTypes = {
  component: PropTypes.elementType,
  size: PropTypes.oneOf(SIZES),
}

Spacer.defaultProps = {
  component: 'div',
  size: 'medium',
}

export default Spacer
