import React from 'react'
import PropTypes from 'prop-types'

import FlexContainer from 'components/atoms/FlexContainer'

import RadioGroupContext from './RadioGroupContext'

const RadioGroup = React.forwardRef((props, ref) => {
  const { children, name, value, onChange, ...other } = props
  return (
    <FlexContainer ref={ref} {...other}>
      <RadioGroupContext.Provider value={{ name, value, onChange }}>
        {children}
      </RadioGroupContext.Provider>
    </FlexContainer>
  )
})

RadioGroup.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioGroup
