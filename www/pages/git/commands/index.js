import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import slowImport from 'components/utils/helpers/slowImport'
import Spacer from 'components/atoms/Spacer'
import Article from 'components/organisms/Article'
import Loading from 'components/molecules/Loading'
import TabList, { Tab } from 'components/molecules/TabList'
import PageLayout from 'components/templates/PageLayout'

const tabNames = ['Basic', 'Tips']

const DynamicComponents = {
  Basic: dynamic(() => slowImport(import('./basic')), { loading: Loading }),
  Tips: dynamic(() => slowImport(import('./tips')), { loading: Loading }),
}

function Content() {
  const [tabIndex, setTabIndex] = useState(0)
  const renderTabs = tabNames.map(tabName => <Tab key={tabName}>{tabName}</Tab>)
  return (
    <Article title="Commands">
      <TabList
        textColor="inverse"
        indicatorColor="inverse"
        value={tabIndex}
        onChange={index => setTabIndex(index)}
      >
        {renderTabs}
      </TabList>
      <Spacer />
      {tabIndex === 0 && <DynamicComponents.Basic />}
      {tabIndex === 1 && <DynamicComponents.Tips />}
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
