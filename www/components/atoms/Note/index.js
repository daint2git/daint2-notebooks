import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Note = ({ classes, color = 'primary', children, ...other }) => (
  <div className={cssModules`root ${color} ${classes}`} {...other}>
    {children}
  </div>
)

export default Note
