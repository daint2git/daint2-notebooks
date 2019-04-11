import React from 'react'

import Article from 'components/organisms/Article'
import ArticleContent from 'components/organisms/JavaScript/ArticleContent'
import PageLayout from 'components/templates/PageLayout'

import data from './data'

function Content() {
  const { title, contents } = data
  return (
    <Article title={title}>
      <ArticleContent contents={contents} />
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
