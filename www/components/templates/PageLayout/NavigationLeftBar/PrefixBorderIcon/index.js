import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PrefixBorderIcon = () => <span className={cssModules`icon`} />

export default PrefixBorderIcon
