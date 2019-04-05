import React from 'react'
import PropTypes from 'prop-types'

import { DrawerProvider } from 'context/DrawerContext'
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
      <Header />
      <FlexContainer>
        <LeftBar />
        <TitleLinksProvider>
          <Main>{children}</Main>
          <RightBar />
        </TitleLinksProvider>
      </FlexContainer>
      <ScrollButton />
    </DrawerProvider>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
