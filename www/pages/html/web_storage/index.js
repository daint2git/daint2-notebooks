import React from 'react'

import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Article from 'components/organisms/Article'
import CodeExample from 'components/organisms/CodeExample'
import PageLayout from 'components/templates/PageLayout'

const HEADERS = ['HTML Web Storage là gì ?', 'localStorage', 'sessionStorage', 'Lưu ý']

function Content() {
  useTitleLinksFromHeaders(HEADERS)
  return (
    <Article title="HTML5 Web Storage">
      <Paper>
        <AnchorLinkHeading>{HEADERS[0]}</AnchorLinkHeading>
        <Text size="large">
          Với lưu trữ web, các ứng dụng web có thể lưu trữ dữ liệu cục bộ trong trình duyệt của
          người dùng.
        </Text>
        <Spacer />
        <Note color="info">
          HTML web storage; tốt hơn <mark>cookies</mark>.
          <br />
          Không giống như cookies, giới hạn lưu trữ lớn hơn nhiều (ít nhất 5MB) và thông tin không
          bao giờ được chuyển đến server.
        </Note>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[1]}</AnchorLinkHeading>
        <Text size="large">
          Đối tượng localStorage lưu trữ dữ liệu không có ngày hết hạn.
          <br />
          Dữ liệu sẽ không bị xóa khi đóng trình duyệt.
        </Text>
        <CodeExample
          input={`
            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.setItem("userName", "daint2")
              // Retrieve
              const userName = localStorage.getItem("userName")
              // Show
              console.log(userName)
            }
          `}
          output={`
            daint2
          `}
        />
        <Text size="large">Cú pháp tương tự</Text>
        <CodeExample
          input={`
            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.userName = "daint2"
              // Retrieve
              const userName = localStorage.userName
              // Show
              console.log(userName)
            }
          `}
          output={`
            daint2
          `}
        />
        <Text size="large">Xóa</Text>
        <CodeExample
          input={`
            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.removeItem("userName")
              // Retrieve
              const userName = localStorage.userName
              // Show
              console.log(userName)
            }
          `}
          output={`
            undefined
          `}
        />
        <Note>
          <strong>Note:</strong>
          <br />
          <mark>Name/value</mark> luôn luôn được lưu trữ dưới dạng <mark>string</mark>.
          <br />
          Khi muốn lưu trữ dữ liệu dạng <mark>object</mark>, ta cần chuyển nó sang dạng json
          string&nbsp;
          <code>JSON.stringify</code>.
        </Note>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[2]}</AnchorLinkHeading>
        <Text size="large">
          Đối tượng sessionStorage bằng với đối tượng localStorage.
          <br />
          Nó lưu trữ dữ liệu chỉ trong một session.
          <br />
          Dữ liệu sẽ bị xóa khi người dùng đóng tab trình duyệt cụ thể.
        </Text>
        <CodeExample
          input={`
            if (typeof(Storage) !== "undefined") {
              // Store
              sessionStorage.setItem("userName", "daint2")
              // Retrieve
              const userName = sessionStorage.getItem("userName")
              // Show
              console.log(userName)
            }
          `}
          output={`
            daint2
          `}
        />
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[3]}</AnchorLinkHeading>
        <Text size="large">
          Trước khi sử dụng web storage, hãy kiểm tra trình duyệt hỗ trợ cho&nbsp;
          <code>localStorage</code> và <code>sessionStorage</code>:
        </Text>
        <CodeExample
          input={`
            if (typeof(Storage) !== "undefined") {
              // Code for localStorage/sessionStorage.
            } else {
              // Sorry! No Web Storage support..
            }
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
