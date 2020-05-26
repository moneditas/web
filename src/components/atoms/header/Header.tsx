import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../../assets/icons/bitcoin-brands.svg'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BtcLogo = styled(Logo)`
  width: 1.5em;
  height: 1.5em;
`

const Title = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.color};
  font-weight: normal;
`

export default React.memo(() => {
  return (
    <Header>
      <BtcLogo />
      <Title>Live bitcoin transaction statistics</Title>
    </Header>
  )
})
