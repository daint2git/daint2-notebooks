import React from 'react'

import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Text from 'components/atoms/Text'
import Spacer from 'components/atoms/Spacer'
import Paper from 'components/atoms/Paper'
import CodeExample from 'components/organisms/CodeExample'
import Heading from 'components/atoms/Heading'
import ResponsiveImage from 'components/atoms/ResponsiveImage'
import FlexContainer from 'components/atoms/FlexContainer'

function Content() {
  const headers = ['Repository', 'Branch', '3 trạng thái của Git']
  useTitleLinksFromHeaders(headers)
  return (
    <Article title="Lí thuyết">
      <Paper>
        <FlexContainer vertical="center">
          <ResponsiveImage
            src="/static/git/repository.PNG"
            style={{ maxWidth: '600px', maxHeight: '600px' }}
          />
        </FlexContainer>
        <AnchorLinkHeading>Repository</AnchorLinkHeading>
        <Text size="large">
          Repository (nhà kho) hay được gọi tắt là Repo đơn giản là nơi chứa/cơ sở dữ liệu
          (database) tất cả những thông tin cần thiết để duy trì và quản lý các sửa đổi và lịch sử
          của dự án.
        </Text>
        <Spacer />
        <Text size="large">Có các loại:</Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Remote repository: Là repository để chia sẻ giữa nhiều người và bố trí trên server chuyên
          dụng.
        </Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Local repository: Là repository bố trí trên máy local của bạn, dành cho một người dùng sử
          dụng.
        </Text>
        <Spacer />
        <AnchorLinkHeading>Branch</AnchorLinkHeading>
        <Text size="large">
          Branch: Là phân nhánh ghi lại luồng thay đổi của lịch sử, các hoạt động trên mỗi branch sẽ
          không ảnh hưởng lên các branch khác nên có thể tiến hành nhiều thay đổi đồng thời trên một
          repository, giúp giải quyết được nhiều nhiệm vụ cùng lúc.
        </Text>
        <Spacer />
        <Text size="large">Có các loại:</Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Local branch: Là nhánh ở local, tồn tại trên máy local của bạn và tất nhiên chỉ bạn mới có
          thể nhìn thấy.
        </Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Local tracking branch: Là một nhánh local để theo dõi các nhánh khác. Điều này để cam kết
          rằng bạn có thể push lên/pull về các commit các nhánh khác.
        </Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Remote branch: là branch lưu ở remote. Branch này có thể fetch về local nhưng không tạo
          thêm branch ở local.
        </Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '2rem' }}>
          Remote tracking branch: là một bản sao cục bộ (local) của một nhánh remote.
        </Text>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>3 trạng thái của Git</AnchorLinkHeading>
        <Text
          size="large"
          innerHtml={`
          <mark>Committed</mark> có nghĩa là dữ liệu đã được lưu trữ một cách an toàn trong cơ sở dữ liệu, tức là những gì bạn đã commit thành công.
          `}
        />
        <Spacer size="small" />
        <Text
          size="large"
          innerHtml={`
          <mark>Staged</mark> là bạn đã đánh dấu sẽ commit phiên bản hiện tại của một tập tin đã chỉnh sửa trong lần commit sắp tới. Trạng thái này xảy ra khi bạn sử dụng lệnh <code>git add <file name></code> nhưng chưa commit.
          `}
        />
        <Spacer size="small" />
        <Text
          size="large"
          innerHtml={`
          <mark>Modified</mark> có nghĩa là bạn đã thay đổi tập tin nhưng chưa commit vào cơ sở dữ liệu, tức là bạn chưa sử dụng lênh <code>git add</code> và <code>git commit</code>.
          `}
        />
        <Spacer />
        <Heading component="h3">Ví dụ</Heading>
        <Text size="base-large">Commited - modify + add + commit</Text>
        <CodeExample
          input={`
          git checkout test-branch
          git add demo.txt
          git commit -m "update file demo.txt"
          `}
        />
        <Spacer size="small" />
        <Text size="base-large">Staged - modify + add</Text>
        <CodeExample
          input={`
          git checkout test-branch
          git add demo.txt
          `}
        />
        <Spacer size="small" />
        <Text size="base-large">Commited - modify + add + commit</Text>
        <CodeExample
          input={`
          git checkout test-branch
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