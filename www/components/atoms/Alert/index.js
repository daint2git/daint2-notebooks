import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Alert = ({ classes, color = 'primary', variant, children, ...other }) => (
  <div
    className={cssModules`root ${color} ${classes}`}
    data-variant={variant}
    {...other}
  >
    {children}
  </div>
)

export default Alert
