import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useWebSocket } from 'services/useWebSocket'
import { TransactionContext } from 'services/transactionContext'
import ThemeProvider from 'components/theme/ThemeProvider'
import { Theme } from 'components/theme/ThemeProvider'
import Header from 'components/atoms/header'
import Footer from 'components/atoms/footer'
import TransactionList from 'components/transaction-list'
import TransactionStatistic from 'components/transaction-statistics'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 1600px;
  margin: auto;
  background-color: ${({ theme }: { theme: Theme }) => theme.background};
`
const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 15px 15px 15px 30px;
`
const Transactions = styled.div`
  flex: 8;
  padding: 15px 30px 15px 15px;
`

function App() {
  const [transactions, socket] = useWebSocket()
  useEffect(() => {
    return () => {
      socket.close()
    }
  }, [socket])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      <ThemeProvider>
        <Container>
          <Statistics>
            <Header />
            <TransactionStatistic />
            <Footer />
          </Statistics>
          <Transactions>
            <TransactionList />
          </Transactions>
        </Container>
      </ThemeProvider>
    </TransactionContext.Provider>
  )
}

export default App
