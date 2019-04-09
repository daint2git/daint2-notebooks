import React from 'react'
import PropTypes from 'prop-types'

import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'
import withRepeater from 'components/utils/hocs/withRepeater'

const Example = ({ text, input, output }) => (
  <>
    {text && <Text size="base-large" innerHtml={text} />}
    <CodeExample input={input} output={output} />
  </>
)

Example.propTypes = {
  text: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

const Examples = withRepeater(Example)

function ItemContent({ header, definition, examples, note }) {
  return (
    <>
      <Paper>
        <AnchorLinkHeading>{header}</AnchorLinkHeading>
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
}

ItemContent.propTypes = {
  header: PropTypes.string.isRequired,
  definition: PropTypes.string,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      input: PropTypes.string,
      output: PropTypes.string,
    }),
  ),
  note: PropTypes.string,
}

export default ItemContent
