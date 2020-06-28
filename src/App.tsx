import React from 'react'
import styled from 'styled-components'
import ThemeProvider from './components/theme/ThemeProvider'
import Header from './components/atoms/header'
import Footer from './components/atoms/footer'
import TransactionList from './components/transaction-list'
import TransactionStatistic from './components/transaction-statistics'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-width: 1600px;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
`
const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 1.5em 3em;
`
const Transactions = styled.div`
  flex: 8;
  padding: 1em;
`

function App() {
  return (
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
  )
}

export default App
