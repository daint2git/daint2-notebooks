import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ResponsiveImage = ({ src, ...other }) => (
  <img src={src} alt={src} className={cssModules`root`} {...other} />
)

ResponsiveImage.propTypes = {
  src: PropTypes.string,
}

export default ResponsiveImage
