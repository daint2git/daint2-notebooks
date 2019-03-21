import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const FlexWrapper = ({ classes, direction = 'row', children }) => (
  <div className={cssModules`root ${classes} ${direction}`}>{children}</div>
)

export default FlexWrapper
