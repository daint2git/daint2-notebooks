import React from 'react'

import useAnchorLinks from 'components/utils/hooks/useAnchorLinks'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

const TITLES = ['getDerivedStateFromProps', 'componentWillReceiveProps']

function Content() {
  useAnchorLinks(TITLES)
  return (
    <Article title="getDerivedStateFromProps vs componentWillReceiveProps">
      <Paper>
        <AnchorLinkHeading>{TITLES[0]}</AnchorLinkHeading>
        <Text size="large">Được kích hoạt trên mỗi lần render.</Text>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{TITLES[1]}</AnchorLinkHeading>
        <Text size="large">
          Được kích hoạt trước khi <mark>a mounted component</mark> nhận props mới.
          <br />
          Được kích hoạt khi <mark>parent component</mark> gây ra re-render, ngay cả khi props không
          thay đổi.
          <br />
          Không được kích hoạt khi <code>setState</code> tại component đó.
          <br />
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
