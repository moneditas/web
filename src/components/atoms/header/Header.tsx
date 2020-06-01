import React from 'react'
import styled from 'styled-components'
import { ReactComponent as bitcoinSvg } from '../../../assets/icons/bitcoin-brands.svg'
import color from '../../theme/colors'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BitcoinLogo = styled(bitcoinSvg)`
  color: ${color.orange};
  width: 2em;
  height: 2em;
`

const Title = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.color};
  font-weight: normal;
`

export default React.memo(() => {
  return (
    <Header>
      <BitcoinLogo />
      <Title>Live bitcoin transaction statistics</Title>
    </Header>
  )
})
