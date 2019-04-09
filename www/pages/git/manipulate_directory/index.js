import React from 'react'

import Article from 'components/organisms/Article'
import ListItemContent from 'components/organisms/Git/ListItemContent'
import PageLayout from 'components/templates/PageLayout'

import contents from './contents'

function Content() {
  return (
    <Article title="Thao tác thư mục trên Windows">
      <ListItemContent contents={contents} />
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
