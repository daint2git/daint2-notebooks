import { createContext } from 'react'

const LocalStateContext = createContext()

const LocalStateConsumer = LocalStateContext.Consumer

export { LocalStateConsumer }
export default LocalStateContext
