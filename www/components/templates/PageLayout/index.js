import React from 'react'
import PropTypes from 'prop-types'

import Main from 'components/molecules/Main'
import SideBar from 'components/molecules/SideBar'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import { DrawerProvider } from './DrawerContext'
import Header from './Header'
import NavigationLeftBar from './NavigationLeftBar'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PageLayout = props => {
  const { children } = props
  return (
    <DrawerProvider initialValue={true}>
      <Header />
      <div className={cssModules`root`}>
        <NavigationLeftBar />
        <Main>{children}</Main>
        <SideBar />
      </div>
    </DrawerProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
