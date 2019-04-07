import React from 'react'

import FlexContainer from 'components/atoms/FlexContainer'
import Spacer from 'components/atoms/Spacer'
import Paper from 'components/atoms/Paper'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import MenuList, { MenuItem } from 'components/molecules/MenuList'
import CodeExample from 'components/organisms/CodeExample'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'
import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'

const styles = {
  subText: {
    textIndent: '1rem',
  },
}

function Content() {
  const headers = ['JSON là gì ?', 'Các phương thức của JSON']
  useTitleLinksFromHeaders(headers)
  return (
    <Article title="JSON">
      <Paper>
        <AnchorLinkHeading>JSON là gì ?</AnchorLinkHeading>
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
              <Text style={styles.subText}>✔ string</Text>
              <Text style={styles.subText}>✔ number (gồm số nguyên và số thực)</Text>
              <Text style={styles.subText}>✔ boolean (true/ false)</Text>
              <Text style={styles.subText}>✔ array</Text>
              <Text style={styles.subText}>✔ object</Text>
              <Text style={styles.subText}>✔ null</Text>
            </FlexContainer>
          </MenuItem>
        </MenuList>
        <Spacer />
        <AnchorLinkHeading>Các phương thức của JSON</AnchorLinkHeading>
        <MenuList>
          <MenuItem>
            <Text size="large">
              <mark>stringify</mark> convert an object to a JSON string
            </Text>
          </MenuItem>
          <MenuItem>
            <Text size="large">
              <mark>parse</mark> convert a JSON string to an object
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
