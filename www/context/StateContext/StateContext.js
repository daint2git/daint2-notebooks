import { createContext } from 'react'

const StateContext = createContext()

const StateConsumer = StateContext.Consumer

export { StateConsumer }
export default StateContext
