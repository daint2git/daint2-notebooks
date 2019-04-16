import React from 'react'
import PropTypes from 'prop-types'

import convertDomStyleToCssStyle from 'components/utils/helpers/convertDomStyleToCssStyle'
import convertCssStyleToDomStyle from 'components/utils/helpers/convertCssStyleToDomStyle'
import useAnchorLinks from 'components/utils/hooks/useAnchorLinks'
import useFormInput from 'components/utils/hooks/useFormInput'
import Note from 'components/atoms/Note'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'
import PropertyRadioGroup from 'components/organisms/cssContent/PropertyRadioGroup'

import Output from './Output'
import { TITLES, ORDER, GROW, SHRINK, BASIS, ALIGN_SELF } from './constants'

const flexContainerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  height: '100%',
}

const Item = ({ name, data, itemStyle }) => {
  const { value, onChange } = useFormInput(data[0].value)
  return (
    <>
      <Paper>
        <AnchorLinkHeading>{name}</AnchorLinkHeading>
        <PropertyRadioGroup name={name} value={value} onChange={onChange} data={data} />
        <CodeExample
          language="css"
          input={`
.flex-container {
${convertDomStyleToCssStyle(flexContainerStyle)}
}
.flex-item:nth-child(3) {
  ${name}: ${value};
}
        `}
          output={
            <Output
              containerStyle={flexContainerStyle}
              itemStyle={itemStyle}
              selectedItemStyle={convertCssStyleToDomStyle({ [name]: value })}
            />
          }
        />
      </Paper>
      <Spacer />
    </>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  itemStyle: PropTypes.object,
}

const FlexItemContent = () => {
  useAnchorLinks(TITLES)
  return (
    <>
      <Item name="order" data={ORDER.options} />
      <Item name="flex-grow" data={GROW.options} />
      <Item name="flex-shrink" data={SHRINK.options} itemStyle={{ width: '40%' }} />
      <Item name="flex-basis" data={BASIS.options} />
      <Item name="align-self" data={ALIGN_SELF.options} />
      <Spacer />
      <Paper>
        <Note
          size="large"
          color="warning"
          innerHtml={`
          The <code>flex</code> property is a shorthand property for:
          &ndash;&nbsp;<code>flex-grow</code>
          &ndash;&nbsp;<code>flex-shrink</code>
          &ndash;&nbsp;<code>flex-basis</code>
          `}
        />
      </Paper>
    </>
  )
}

export default FlexItemContent
