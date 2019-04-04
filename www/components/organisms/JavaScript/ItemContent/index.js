import React from 'react'
import PropTypes from 'prop-types'

import BaseLink from 'components/atoms/BaseLink'
import Text from 'components/atoms/Text'
import Spacer from 'components/atoms/Spacer'
import Heading from 'components/atoms/Heading'
import Paper from 'components/molecules/Paper'
import CodeExample from 'components/organisms/CodeExample'
import withRepeater from 'components/utils/withRepeater'

const Example = ({ text, input, output }) => (
  <>
    <Text size="large" innerHtml={text} />
    <CodeExample>
      {input}
      {output}
    </CodeExample>
    <Spacer />
  </>
)

Example.propTypes = {
  text: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

const Examples = withRepeater(Example)

const ItemContent = ({ header, definition, contents }) => (
  <>
    <Paper>
      <Heading>
        <BaseLink variant="anchor" id={header} />
        {header}
      </Heading>
      <Text size="x_large" innerHtml={definition} />
      <Examples list={contents} />
    </Paper>
    <Spacer />
  </>
)

ItemContent.propTypes = {
  header: PropTypes.string.isRequired,
  definition: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      input: PropTypes.string,
      output: PropTypes.string,
    }),
  ),
}

export default ItemContent
