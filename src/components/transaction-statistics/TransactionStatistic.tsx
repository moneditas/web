import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { ReactComponent as AdjustSvg } from 'assets/icons/adjust-solid.svg'
import { ReactComponent as ClockSvg } from 'assets/icons/clock-regular.svg'
import { ReactComponent as HourglassSvg } from 'assets/icons/hourglass-regular.svg'
import { ReactComponent as ExchangeSvg } from 'assets/icons/exchange-alt-solid.svg'
import { ReactComponent as PiggySvg } from 'assets/icons/piggy-bank-solid.svg'
import color from 'components/theme/colors'
import { Themes } from 'components/theme/ThemeProvider'
import { Theme } from 'components/theme/ThemeProvider'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  background: rgb(31, 31, 31);
  background: linear-gradient(180deg, rgba(31, 31, 31, 1) 0%, rgba(17, 17, 17, 1) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 30px 0;
  font-family: 'Nunito', sans-serif;
`
const InfoPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-height: 650px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 20px 0;
`
const InfoTitle = styled.h3`
  font-size: 20px;
  color: ${color.white};
  margin: 0 0 10px 30%;
`
const InfoSection = styled.div`
  display: flex;
`
const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  svg {
    color: ${color.white};
    opacity: 0.6;
    height: 30px;
    width: 30px;
    margin-top: 3px;
  }
`
const InfoDescription = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: ${color.white};
  margin: 0;
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
    height: 15px;
    width: 15px;
  }
`
const ThemeLabel = styled.span`
  margin-right: 5px;
  text-transform: capitalize;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
`

const TransactionStatistic = () => {
  const themeContext: Theme = useContext(ThemeContext)
  const isDarkTheme = themeContext.currentTheme === 'dark'
  const nextTheme: Themes = isDarkTheme ? 'light' : 'dark'
  const AdjustIconStyles: React.CSSProperties = isDarkTheme ? { transform: 'rotate(180deg)' } : {}
  const handleThemeSwitch = () => themeContext.setCurrentTheme(nextTheme)

  return (
    <Container>
      <InfoPanel>
        <InfoContainer>
          <InfoTitle>Time:</InfoTitle>
          <InfoSection>
            <InfoIcon>
              <ClockSvg />
            </InfoIcon>
            <InfoDescription>12:20</InfoDescription>
          </InfoSection>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Total Transactions:</InfoTitle>
          <InfoSection>
            <InfoIcon>
              <HourglassSvg />
            </InfoIcon>
            <InfoDescription>1200</InfoDescription>
          </InfoSection>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Exchange Rate:</InfoTitle>
          <InfoSection>
            <InfoIcon>
              <ExchangeSvg />
            </InfoIcon>
            <InfoDescription>
              1 <BtcTag>BTC</BtcTag> / 14 <DollarTag>U$D</DollarTag>
            </InfoDescription>
          </InfoSection>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Biggest Transaction:</InfoTitle>
          <InfoSection>
            <InfoIcon>
              <PiggySvg />
            </InfoIcon>
            <div>
              <InfoDescription>
                1 <BtcTag>BTC</BtcTag>
              </InfoDescription>
              <InfoDescription>
                14 <DollarTag>U$D</DollarTag>
              </InfoDescription>
            </div>
          </InfoSection>
        </InfoContainer>
      </InfoPanel>
      <ThemeSwitcher onClick={handleThemeSwitch}>
        <ThemeLabel>{nextTheme} Theme</ThemeLabel>
        <AdjustSvg style={AdjustIconStyles} />
      </ThemeSwitcher>
    </Container>
  )
}

export default TransactionStatistic
