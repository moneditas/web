import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { TransactionContext } from 'services/transactionContext'
import { Theme } from 'components/theme/ThemeProvider'

import { Transaction } from 'services/useWebSocket'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${({ theme }: { theme: Theme }) => theme.color};
  background-color: ${({ theme }: { theme: Theme }) => theme.backgroundSecondary};
  font-family: 'Roboto Mono';
`
const Hash = styled.div`
  flex: 1;
  span {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 500px;
  }
`
const Time = styled.span`
  padding-left: 5px;
`
const Size = styled.span`
  padding-left: 5px;
`
const Spent = styled.span`
  padding-left: 5px;
`

const getTime = (date) => {
  return new Date(date).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const TransactionList = () => {
  const { transactions: Transaction[] } = useContext(TransactionContext)

  return (
    <Container>
      {transactions.map((t) => (
        <Row key={t.hash}>
          <Hash>
            <span>{t.hash}</span>
          </Hash>
          <Time>{getTime(t.time)}</Time>
          <Size>{t.size}</Size>
          <Spent>{t.spent}</Spent>
        </Row>
      ))}
    </Container>
  )
}

export default TransactionList
