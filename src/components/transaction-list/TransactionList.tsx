// @ts-nocheck

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import createWebSocketClient from '../../services/ws'


const { onMessage } = createWebSocketClient()

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    onMessage(function (transaction: any) {
      setTransactions((transactions) => [...transactions, transaction] as any)
    })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transform: 'scaleY(-1)',
        overflowY: 'auto'
      }}
    >
      {transactions.reverse().map((i) => (
        <div key={i.hash} style={{ transform: 'scaleY(-1)' }}>
          {i.hash}
        </div>
      ))}
    </div>
  )
}

export default TransactionList
