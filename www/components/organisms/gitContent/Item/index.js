import React from 'react'
import PropTypes from 'prop-types'

import withRepeater from 'components/utils/hocs/withRepeater'
import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'

const Example = ({ text, input, output }) => (
  <>
    {text && <Text size="base-large" innerHtml={text} />}
    <CodeExample input={input} output={output} />
  </>
)

const examplePropTypes = {
  text: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

Example.propTypes = examplePropTypes

const Examples = withRepeater(Example)

const Item = ({ title, definition, examples, note }) => (
  <>
    <Paper>
      <AnchorLinkHeading>{title}</AnchorLinkHeading>
      {definition && (
        <>
          <Text size="x-large" innerHtml={definition} />
          <Spacer />
        </>
      )}
      <Examples list={examples} />
      <Spacer />
      {note && <Note color="info" innerHtml={note} />}
    </Paper>
    <Spacer />
  </>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  definition: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.shape(examplePropTypes)),
  note: PropTypes.string,
}

export default Item
