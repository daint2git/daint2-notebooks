import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ExternalLink = ({ classes, ...other }) => (
  <a className={cssModules`root ${classes}`} target="_blank" {...other} />
)

export default ExternalLink
