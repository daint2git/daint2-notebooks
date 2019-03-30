import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const StickySocialBar = () => (
  <div className={cssModules`root`}>
    <a href="http://facebook.com.vn" className={cssModules`facebook`}>
      <i className="fa fa-facebook" />
    </a>
    <a href="https://twitter.com" className={cssModules`twitter`}>
      <i className="fa fa-twitter" />
    </a>
    <a href="https://www.google.com" className={cssModules`google`}>
      <i className="fa fa-google" />
    </a>
    <a href="https://www.linkedin.com" className={cssModules`linkedin`}>
      <i className="fa fa-linkedin" />
    </a>
    <a href="https://www.youtube.com/" className={cssModules`youtube`}>
      <i className="fa fa-youtube" />
    </a>
  </div>
)

export default StickySocialBar
