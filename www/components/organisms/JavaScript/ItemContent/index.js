import React from 'react'
import PropTypes from 'prop-types'

import BaseLink from 'components/atoms/BaseLink'
import Heading from 'components/atoms/Heading'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import CodeExample from 'components/organisms/CodeExample'
import withRepeater from 'components/utils/hocs/withRepeater'

const Example = ({ text, input, output }) => (
  <>
    {text && <Text size="large" innerHtml={text} />}
    <CodeExample input={input} output={output} />
    <Spacer />
  </>
)

Example.propTypes = {
  text: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

const Examples = withRepeater(Example)

function ItemContent({ header, definition, examples }) {
  return (
    <>
      <Paper>
        <Heading>
          <BaseLink variant="anchor" id={header} />
          {header}
        </Heading>
        {definition && <Text size="x-large" innerHtml={definition} />}
        <Examples list={examples} />
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
}

export default ItemContent
