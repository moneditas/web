import { createContext } from 'react'

export const TransactionContext = createContext({})
export const TransactionPrivider = TransactionContext.Provider
export const TransactionConsumer = TransactionContext.Consumer

export default TransactionContext
