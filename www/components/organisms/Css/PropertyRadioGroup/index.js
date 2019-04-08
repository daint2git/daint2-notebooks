import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import isObject from 'components/utils/helpers/isObject'
import withRepeater from 'components/utils/hocs/withRepeater'
import FlexContainer from 'components/atoms/FlexContainer'
import Heading from 'components/atoms/Heading'
import Radio from 'components/atoms/Radio'
import RadioGroup from 'components/molecules/RadioGroup'

const Radios = withRepeater(Radio, 'data')

function PropertyRadioGroup(props) {
  const { heading, name, value, onChange, data } = props

  const memoizedRadios = useMemo(() => {
    const style = { marginBottom: '5px' }

    if (!isObject(data[0])) {
      return data.map(item => (
        <Radio key={item.toString()} value={item.toString()} style={style}>
          {item}
        </Radio>
      ))
    }

    return <Radios data={data} style={style} />
  }, [data])

  return (
    <FlexContainer direction="column" style={{ marginRight: '10px' }}>
      {heading && <Heading component="h4">{heading}</Heading>}
      <RadioGroup name={name} value={value} onChange={onChange} direction="column">
        {memoizedRadios}
      </RadioGroup>
    </FlexContainer>
  )
}

PropertyRadioGroup.propTypes = {
  heading: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}

export default PropertyRadioGroup
