import React from 'react'
import PropTypes from 'prop-types'

import { TitlesOnRightBarProvider } from 'context/TitlesOnRightBarContext'
import ScrollButton from 'components/molecules/ScrollButton'
import Main from 'components/molecules/Main'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import { DrawerProvider } from './DrawerContext'
import Header from './Header'
import NavigationLeftBar from './NavigationLeftBar'
import NavigationRightBar from './NavigationRightBar'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PageLayout = props => {
  const { children } = props
  return (
    <DrawerProvider initialOpenDrawer={true}>
      <Header />
      <div className={cssModules`root`}>
        <NavigationLeftBar />
        <TitlesOnRightBarProvider>
          <Main>{children}</Main>
          <NavigationRightBar />
        </TitlesOnRightBarProvider>
      </div>
      <ScrollButton />
    </DrawerProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
