import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components';
import { ReactComponent as AdjustSvg } from '../../assets/icons/adjust-solid.svg'
import { ReactComponent as ClockSvg } from '../../assets/icons/clock-regular.svg'
import { ReactComponent as HourglassSvg } from '../../assets/icons/hourglass-regular.svg'
import { ReactComponent as ExchangeSvg } from '../../assets/icons/exchange-alt-solid.svg'
import { ReactComponent as PiggySvg } from '../../assets/icons/piggy-bank-solid.svg'
import color from '../theme/colors'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(31, 31, 31);
  background: linear-gradient(
    180deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(17, 17, 17, 1) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 2em;
`
const InfoSection = styled.div`
  display: flex;
`
const InfoIcon = styled.div`
  display: flex;
  width: 20%;
  margin-top: 3.1em;
  justify-content: center;
  svg {
    color: ${color.white};
    height: 2em;
    width: 2em;
  }
`
const InfoTitle = styled.h3`
  color: ${color.white};
  height: 2em;
  margin: 0;
`
const InfoDescription = styled.p`
  color: ${color.white};
`
const BtcTag = styled.span`
  color: ${color.orange};
`
const DollarTag = styled.span`
  color: ${color.green};
`
const ThemeSwitcher = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  cursor: pointer;
  user-select: none;

  svg {
    height: 1em;
    width: 1em;
  }
`
const ThemeLabel = styled.span`
  margin-right: 5px;
  text-transform: capitalize;
`

const TransactionStatistic = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkTheme = themeContext.currentTheme === 'dark'
  const nextTheme = isDarkTheme ? 'light' : 'dark'
  const AdjustIconStyles = isDarkTheme ? { transform: 'rotate(180deg)' } : {}

  return (
    <Container>
      <div>
        <InfoSection>
          <InfoIcon>
            <ClockSvg />
          </InfoIcon>
          <div>
            <InfoTitle>Time:</InfoTitle>
            <InfoDescription>12:20</InfoDescription>
          </div>
        </InfoSection>
        <InfoSection>
          <InfoIcon>
            <HourglassSvg />
          </InfoIcon>
          <div>
            <InfoTitle>Total Transactions:</InfoTitle>
            <InfoDescription>1200</InfoDescription>
          </div>
        </InfoSection>
        <InfoSection>
          <InfoIcon>
            <ExchangeSvg />
          </InfoIcon>
          <div>
            <InfoTitle>Exchange Rate:</InfoTitle>
            <InfoDescription>1 <BtcTag>BTC</BtcTag> / 14 <DollarTag>U$D</DollarTag></InfoDescription>
          </div>
        </InfoSection>
        <InfoSection>
          <InfoIcon>
            <PiggySvg />
          </InfoIcon>
          <div>
            <InfoTitle>Biggest Transaction:</InfoTitle>
            <InfoDescription>1 <BtcTag>BTC</BtcTag></InfoDescription>
            <InfoDescription>14 <DollarTag>U$D</DollarTag></InfoDescription>
          </div>
        </InfoSection>
      </div>
      <ThemeSwitcher onClick={() => themeContext.setCurrentTheme(nextTheme)}>
        <ThemeLabel>{nextTheme} Theme</ThemeLabel>
        <AdjustSvg style={AdjustIconStyles} />
      </ThemeSwitcher>
    </Container >
  )
}

export default TransactionStatistic
