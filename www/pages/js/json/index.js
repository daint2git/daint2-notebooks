import React from 'react'

import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import FlexContainer from 'components/atoms/FlexContainer'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'
import MenuList, { MenuItem } from 'components/molecules/MenuList'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

const HEADERS = ['JSON là gì ?', 'Các phương thức của JSON']

function Content() {
  useTitleLinksFromHeaders(HEADERS)
  return (
    <Article title="JSON">
      <Paper>
        <AnchorLinkHeading>{HEADERS[0]}</AnchorLinkHeading>
        <MenuList>
          <MenuItem>
            <Text size="large">
              <strong>JavaScript Object Notation</strong>&nbsp;là biểu mẫu dữ liệu dùng để kí hiệu
              đối tượng trong JavaScript.
            </Text>
          </MenuItem>
          <MenuItem>
            <Text size="large">
              Trong JSON, toàn bộ dữ liệu đều được coi là một array hoặc một object (là cấu trúc dữ
              liệu dựa trên các cặp <mark>key-value</mark>)
            </Text>
          </MenuItem>
          <MenuItem>
            <FlexContainer direction="column">
              <Text size="large">Các kiểu dữ liệu chính của JSON:</Text>
              <Spacer />
              <Text style={{ paddingLeft: '1rem' }}>
                string
                <br />
                number (gồm số nguyên và số thực)
                <br />
                boolean (true/ false)
                <br />
                array
                <br />
                object
                <br />
                null
              </Text>
            </FlexContainer>
          </MenuItem>
        </MenuList>
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[1]}</AnchorLinkHeading>
        <MenuList>
          <MenuItem>
            <Text size="large">
              <code>JSON.stringify</code> convert an object to a JSON string
            </Text>
          </MenuItem>
          <MenuItem>
            <Text size="large">
              <code>JSON.parse</code> convert a JSON string to an object
            </Text>
          </MenuItem>
          <CodeExample
            input={`
              const myPet = { name: "chim cu", weight: 5, isDead: false }

              const myPetString = JSON.stringify(myPet)
              console.log(myPetString)
              console.log(typeof myPetString)

              const myPetObject = JSON.parse(myPetString)
              console.log(myPetObject)
              console.log(typeof myPetObject)
            `}
            output={`
              {"name":"cucu","weight":5,"isDead":false}
              string

              { name: 'cucu', weight: 5, isDead: false }
              object
            `}
          />
        </MenuList>
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
