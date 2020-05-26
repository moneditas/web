import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components';

const Container = styled.div`
  flex: 1;
  width: 100%;
  background: rgb(31, 31, 31);
  background: linear-gradient(
    180deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(17, 17, 17, 1) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`

const TransactionStatistic = () => {
  const themeContext = useContext(ThemeContext);
  const nextTheme = themeContext.currentTheme === 'light' ? 'dark' : 'light'
  return (
    <Container>
      <button onClick={() => themeContext.setCurrentTheme(nextTheme)}>
        click
      </button>
    </Container >
  )
}

export default TransactionStatistic
