import React from 'react'
import { ReactNode } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { Transaction } from 'services/useWebSocket'

type TransactionContextValue = { transactions: Transaction[] }

type Props = {
  transactions: Transaction[]
  children: ReactNode
}

const TransactionContext = createContext<TransactionContextValue>({
  transactions: [],
})

const TransactionProvider = (props: Props) => {
  const { transactions, children } = props
  const value: TransactionContextValue = { transactions }
  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>
}

const useTransaction = () => useContext(TransactionContext)

export { TransactionContext, TransactionProvider, useTransaction }
