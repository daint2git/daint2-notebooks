import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function AppLogo() {
  return <div className={cssModules`app-logo`}>DAINT2 NOTEBOOKS</div>
}

export default AppLogo
