import React from 'react'
import PropTypes from 'prop-types'

import convertCssStyleToDomStyle from 'components/utils/helpers/convertCssStyleToDomStyle'
import useFormInput from 'components/utils/hooks/useFormInput'
import FlexContainer from 'components/atoms/FlexContainer'
import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'

import PropertyRadioGroup from '../PropertyRadioGroup'

function Item(props) {
  const { title, definition, options, output, outputStyle, note } = props
  const { value, onChange } = useFormInput(options[0])

  return (
    <>
      <Paper>
        <AnchorLinkHeading>{title}</AnchorLinkHeading>
        {definition && <Text size="x-large" innerHtml={definition} />}
        <Spacer />
        <FlexContainer>
          <PropertyRadioGroup name={title} value={value} onChange={onChange} data={options} />
        </FlexContainer>
        <CodeExample
          language="css"
          style={{ ...convertCssStyleToDomStyle({ [title]: value }), ...outputStyle }}
          input={`
            {
              ${title}: ${value};
            }
          `}
          output={output}
        />
        {note && <Note color="info" innerHtml={note} />}
      </Paper>
      <Spacer />
    </>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  definition: PropTypes.string,
  options: PropTypes.array,
  outputStyle: PropTypes.object,
  output: PropTypes.string,
  note: PropTypes.string,
}

Item.defaultProps = {
  output: 'This is some text. This is some text.',
}

export default Item
