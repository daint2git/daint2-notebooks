import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ExternalLink = ({ className, ...other }) => (
  <a className={cssModules`root ${className}`} target="_blank" {...other} />
)

ExternalLink.propTypes = {
  className: PropTypes.string,
}

export default ExternalLink