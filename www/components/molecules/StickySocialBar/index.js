import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const StickySocialBar = () => (
  <div className={cssModules`root`}>
    <a href="#" className={cssModules`facebook`}>
      <i className="fa fa-facebook" />
    </a>
    <a href="#" className={cssModules`twitter`}>
      <i className="fa fa-twitter" />
    </a>
    <a href="#" className={cssModules`google`}>
      <i className="fa fa-google" />
    </a>
    <a href="#" className={cssModules`linkedin`}>
      <i className="fa fa-linkedin" />
    </a>
    <a href="#" className={cssModules`youtube`}>
      <i className="fa fa-youtube" />
    </a>
  </div>
)

export default StickySocialBar
