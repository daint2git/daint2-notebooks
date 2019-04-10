import React from 'react'

import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

const HEADERS = ['getDerivedStateFromProps', 'componentWillReceiveProps']

function Content() {
  useTitleLinksFromHeaders(HEADERS)
  return (
    <Article title="getDerivedStateFromProps vs componentWillReceiveProps">
      <Paper>
        <AnchorLinkHeading>{HEADERS[0]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">Được kích hoạt trên mỗi lần render.</Text>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[1]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">
          Được kích hoạt trước khi <mark>a mounted component</mark> nhận props mới.
          <Spacer size="small" />
          Được kích hoạt khi <mark>parent component</mark> gây ra re-render, ngay cả khi props không
          thay đổi.
          <Spacer size="small" />
          Không được kích hoạt khi <code>setState</code> tại component đó.
          <Spacer size="small" />
          Không được kích hoạt trong lần đầu tiên khi <mark>mounting component</mark>.
        </Text>
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
