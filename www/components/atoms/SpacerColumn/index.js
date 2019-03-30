import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const SpacerColumn = props => <div className={cssModules`root`} {...props} />

export default SpacerColumn
