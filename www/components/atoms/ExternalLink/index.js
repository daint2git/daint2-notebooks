import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ExternalLink = ({ children, className, ...other }) => (
  <a className={cssModules`root ${className}`} target="_blank" rel="noreferrer noopener" {...other}>
    {children}
  </a>
)

ExternalLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ExternalLink
