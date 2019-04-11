import React from 'react'
import PropTypes from 'prop-types'

import { DrawerProvider } from 'context/DrawerContext'
import { SideBarProvider } from 'context/SideBarContext'
import { AnchorLinksProvider } from 'context/AnchorLinksContext'
import FlexContainer from 'components/atoms/FlexContainer'
import Main from 'components/molecules/Main'
import ScrollButton from 'components/molecules/ScrollButton'

import Header from './Header'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function PageLayout({ children }) {
  return (
    <DrawerProvider initialOpen={true}>
      <SideBarProvider initialOpen={true}>
        <Header />
        <FlexContainer>
          <AnchorLinksProvider>
            <LeftBar />
            <Main>{children}</Main>
            <RightBar />
          </AnchorLinksProvider>
        </FlexContainer>
        <ScrollButton />
      </SideBarProvider>
    </DrawerProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
