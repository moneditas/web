import React from 'react'
import styled from 'styled-components'
import { ReactComponent as bitcoinSvg } from 'assets/icons/bitcoin-brands.svg'
import color from 'components/theme/colors'
import { Theme } from 'components/theme/ThemeProvider'

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
  color: ${({ theme }: { theme: Theme }) => theme.color};
  font-weight: normal;
`

export default () => {
  return (
    <Header>
      <BitcoinLogo />
      <Title>Live bitcoin transaction statistics</Title>
    </Header>
  )
}
