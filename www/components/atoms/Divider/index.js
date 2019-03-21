import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Divider = ({ classes, ...other }) => (
  <hr className={cssModules`root ${classes}`} {...other} />
)

export default Divider
