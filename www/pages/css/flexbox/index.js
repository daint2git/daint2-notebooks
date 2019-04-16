import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import slowImport from 'components/utils/helpers/slowImport'
import Spacer from 'components/atoms/Spacer'
import Loading from 'components/molecules/Loading'
import TabList, { Tab } from 'components/molecules/TabList'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

const tabNames = ['FlexContainer', 'FlexItem']

const DynamicComponents = {
  FlexContainer: dynamic(() => slowImport(import('./FlexContainer')), { loading: Loading }),
  FlexItem: dynamic(() => slowImport(import('./FlexItem')), { loading: Loading }),
}

const renderTabs = tabNames.map(tabName => <Tab key={tabName}>{tabName}</Tab>)

function Content() {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Article title="Flexbox">
      <TabList
        textColor="inverse"
        indicatorColor="inverse"
        value={tabIndex}
        onChange={index => setTabIndex(index)}
      >
        {renderTabs}
      </TabList>
      <Spacer />
      {tabIndex === 0 && <DynamicComponents.FlexContainer />}
      {tabIndex === 1 && <DynamicComponents.FlexItem />}
    </Article>
  )
}

function Page(props) {
  return (
    <PageLayout>
      <Content {...props} />
    </PageLayout>
  )
}

export default Page
