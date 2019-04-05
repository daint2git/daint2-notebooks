import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LocalStateContext from './LocalStateContext'

const LocalStateProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState)
  return (
    <LocalStateContext.Provider value={{ state, setState }}>{children}</LocalStateContext.Provider>
  )
}

LocalStateProvider.propTypes = {
  children: PropTypes.node,
  initialState: PropTypes.any,
}

export default LocalStateProvider
