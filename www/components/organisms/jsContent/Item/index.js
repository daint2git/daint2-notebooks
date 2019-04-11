import React from 'react'
import PropTypes from 'prop-types'

import withRepeater from 'components/utils/hocs/withRepeater'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'

const Example = ({ text, input, output }) => (
  <>
    {text && <Text size="large" innerHtml={text} />}
    <CodeExample input={input} output={output} />
    <Spacer />
  </>
)

const examplePropTypes = {
  text: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

Example.propTypes = examplePropTypes

const Examples = withRepeater(Example)

const Item = ({ title, definition, examples }) => (
  <>
    <Paper>
      <AnchorLinkHeading>{title}</AnchorLinkHeading>
      {definition && <Text size="x-large" innerHtml={definition} />}
      <Examples list={examples} />
    </Paper>
    <Spacer />
  </>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  definition: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.shape(examplePropTypes)),
}

export default Item
