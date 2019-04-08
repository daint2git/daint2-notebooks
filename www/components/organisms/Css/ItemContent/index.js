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
import PropertyRadioGroup from 'components/organisms/Css/PropertyRadioGroup'

function ItemContent(props) {
  const { header, definition, options, output, note } = props
  const { value, onChange } = useFormInput(options[0])

  return (
    <>
      <Paper>
        <AnchorLinkHeading>{header}</AnchorLinkHeading>
        {definition && <Text size="x-large" innerHtml={definition} />}
        <Spacer />
        <FlexContainer>
          <PropertyRadioGroup name={header} value={value} onChange={onChange} data={options} />
        </FlexContainer>
        <CodeExample
          language="css"
          style={convertCssStyleToDomStyle({ [header]: value })}
          input={`
            {
              ${header}: ${value};
            }
          `}
          output={output}
        />
        {note && <Note color="info">{note}</Note>}
      </Paper>
      <Spacer />
    </>
  )
}

ItemContent.propTypes = {
  header: PropTypes.string.isRequired,
  definition: PropTypes.string,
  options: PropTypes.array,
  output: PropTypes.string,
  note: PropTypes.string,
}

ItemContent.defaultProps = {
  output: 'This is some text. This is some text.',
}

export default ItemContent
