import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import createWebSocketClient from '../../services/ws'

const { close, onMessage } = createWebSocketClient()

const Container = styled.div``

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      onMessage(function (transaction : any) {
        setTransactions((transactions) => ([...transactions, transaction] as any))
      })
    }, []);

  return <Container>
    <p>Transactions</p>

    <ul>
      {transactions.map((transaction, index) => {
        return <li key={index}>{JSON.stringify(transaction, null, 2)}</li>
      })}
    </ul>

  </Container>
}

export default TransactionList
