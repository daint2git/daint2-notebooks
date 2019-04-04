import React, { useState } from 'react'

import Article from 'components/organisms/Article'
import Spacer from 'components/atoms/Spacer'
import TabList, { Tab } from 'components/molecules/TabList'
import PageLayout from 'components/templates/PageLayout'

import Basic from './Basic'
import Tips from './Tips'

const tabs = ['Basic', 'Tips']

const renderTabs = tabs.map(tabName => <Tab key={tabName}>{tabName}</Tab>)

function Page(props) {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <PageLayout>
      <Article title="Array">
        <TabList
          textColor="inverse"
          indicatorColor="inverse"
          value={tabIndex}
          onChange={index => setTabIndex(index)}
        >
          {renderTabs}
        </TabList>
        <Spacer />
        {tabIndex === 0 && <Basic title="Basic" />}
        {tabIndex === 1 && <Tips title="Tips" />}
      </Article>
    </PageLayout>
  )
}

export default Page
