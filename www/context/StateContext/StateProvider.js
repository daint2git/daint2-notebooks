import React, { useState } from 'react'
import PropTypes from 'prop-types'
import produce from 'immer'

import StateContext from './StateContext'

const StateProvider = ({ children, initialState }) => {
  const [state, updateState] = useState(initialState)

  function setState(updater) {
    let nextState

    switch (updater) {
      case 'object':
        nextState = { ...state, ...updater }
        break
      case 'function':
        nextState = produce(state, updater)
        break
      default:
        nextState = updater
    }

    updateState(nextState)
  }

  return <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node,
  initialState: PropTypes.any,
}

export default StateProvider
