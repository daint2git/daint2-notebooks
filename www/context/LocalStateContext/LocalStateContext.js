import React from 'react'

const LocalStateContext = React.createContext()

const LocalStateConsumer = LocalStateContext.Consumer

export { LocalStateConsumer }
export default LocalStateContext
