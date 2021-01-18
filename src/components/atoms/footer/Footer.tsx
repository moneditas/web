import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { Theme } from 'components/theme/ThemeProvider'

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 13px;
  color: ${({ theme }: { theme: Theme }) => theme.color};
`
const Link = styled.a`
  height: 23px;
  margin-left: 5px;
`
const Avatar = styled.img`
  height: 23px;
  width: 23px;
  border-radius: 50%;
`

const Footer: React.FC = () => {
  const themeContext: Theme = useContext(ThemeContext)
  const isDarkTheme = themeContext.currentTheme === 'dark'

  return (
    <Container>
      Made with&nbsp;
      {isDarkTheme ? <span>&#10084;&#65039;</span> : <span>&#128420;</span>}
      &nbsp;by
      <Link href="https://github.com/dvnahuel" target="_blank" rel="noopener noreferrer">
        <Avatar
          src="https://avatars3.githubusercontent.com/u/23080631?s=460&u=f38265b9c5bc73462b28371e5192f8885c0f121b&v=4"
          alt="dvnahuel github"
          title="Nahuel Del Valle"
        />
      </Link>
      <Link href="https://github.com/ndelvalle" target="_blank" rel="noopener noreferrer">
        <Avatar
          src="https://avatars1.githubusercontent.com/u/6719053?s=460&u=e441153f95279775ce6acdb168e9578128a5d82c&v=4"
          alt="ndelvalle github"
          title="Nicolas Del Valle"
        />
      </Link>
      <Link href="https://github.com/ughettoariel" target="_blank" rel="noopener noreferrer">
        <Avatar
          src="https://avatars3.githubusercontent.com/u/26730587?s=460&u=72d794124f554ee32cc5aad6f633cab498dd1439&v=4"
          alt="ughettoariel github"
          title="Ariel Ughetto"
        />
      </Link>
    </Container>
  )
}

export default Footer
