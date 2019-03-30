import React from 'react'
import PropTypes from 'prop-types'

import Main from 'components/molecules/Main'
import SideBar from 'components/molecules/SideBar'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import Header from './Header'
import NavigationLeftBar from './NavigationLeftBar'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PageLayout = props => {
  const { children } = props
  return (
    <div className={cssModules`root`}>
      <Header />
      <NavigationLeftBar />
      <Main>{children}</Main>
      <SideBar />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
