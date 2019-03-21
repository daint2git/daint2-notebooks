import React from 'react'

import cssModuleNameTag from 'common/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const RootLayout = ({ children, other }) => (
  <div className={cssModules`root`} {...other}>
    {children}
  </div>
)

export default RootLayout
