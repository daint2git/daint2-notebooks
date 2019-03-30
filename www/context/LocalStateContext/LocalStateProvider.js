import React from 'react'
import PropTypes from 'prop-types'

import LocalStateContext from './LocalStateContext'

const LocalStateProvider = ({ children, initialValue }) => {
  const [value, setValue] = React.useState(initialValue)
  return (
    <LocalStateContext.Provider value={{ value, setValue }}>{children}</LocalStateContext.Provider>
  )
}

LocalStateProvider.propTypes = {
  children: PropTypes.node,
  initialValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default LocalStateProvider
