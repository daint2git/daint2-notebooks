import React from 'react'
import PropTypes from 'prop-types'

import { DrawerProvider } from 'context/DrawerContext'
import { SideBarProvider } from 'context/SideBarContext'
import { TitleLinksProvider } from 'context/TitleLinksContext'
import FlexContainer from 'components/atoms/FlexContainer'
import Main from 'components/molecules/Main'
import ScrollButton from 'components/molecules/ScrollButton'

import Header from './Header'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function PageLayout(props) {
  const { children } = props
  return (
    <DrawerProvider initialOpen={true}>
      <TitleLinksProvider>
        <SideBarProvider initialOpen={true}>
          <Header />
          <FlexContainer>
            <LeftBar />
            <Main>{children}</Main>
            <RightBar />
          </FlexContainer>
          <ScrollButton />
        </SideBarProvider>
      </TitleLinksProvider>
    </DrawerProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
