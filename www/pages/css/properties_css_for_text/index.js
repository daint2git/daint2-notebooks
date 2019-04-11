import React from 'react'

import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Article from 'components/organisms/Article'
import List from 'components/organisms/cssContent/List'
import PageLayout from 'components/templates/PageLayout'

import data from './data'

function Content() {
  return (
    <Article title={data.title}>
      <List contents={data.contents} />
      <Paper>
        <Note
          color="warning"
          size="large"
          innerHtml={`
            Ở đây mình sẽ không đề cập đến 2 value này vì thuộc tính css nào cũng có :v
            ✔ <code>initial</code> (Sets this property to its default value).
            ✔ <code>inherit</code> (Inherits this property from its parent element).
          `}
        />
      </Paper>
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
