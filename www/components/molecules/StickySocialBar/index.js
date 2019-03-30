import React from 'react'
import Proptypes from 'prop-types'

import withRepeater from 'components/utils/withRepeater'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import socialList from './socialList'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const SocialItem = ({ url, name }) => (
  <a
    className={cssModules`social-item ${name}`}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    <i className={`fa fa-${name}`} />
  </a>
)

SocialItem.propTypes = {
  url: Proptypes.string,
  name: Proptypes.string,
}

const SocialItems = withRepeater(SocialItem)

const StickySocialBar = () => (
  <div className={cssModules`root`}>
    <SocialItems list={socialList} />
  </div>
)

export default StickySocialBar
