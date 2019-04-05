import React, { useState } from 'react'

import Spacer from 'components/atoms/Spacer'
import TabList, { Tab } from 'components/molecules/TabList'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

import Basic from './Basic'
import Tips from './Tips'

const tabNames = ['Basic', 'Tips']

const renderTabNames = tabNames.map(tabName => <Tab key={tabName}>{tabName}</Tab>)

function Content() {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Article title="Array">
      <TabList
        textColor="inverse"
        indicatorColor="inverse"
        value={tabIndex}
        onChange={index => setTabIndex(index)}
      >
        {renderTabNames}
      </TabList>
      <Spacer />
      {tabIndex === 0 && <Basic title="Basic" />}
      {tabIndex === 1 && <Tips title="Tips" />}
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
