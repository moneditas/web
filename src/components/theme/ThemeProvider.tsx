import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import color from './colors'

export type Themes = 'light' | 'dark'
export type Theme = {
  currentTheme: Themes
  setCurrentTheme: React.Dispatch<React.SetStateAction<Themes>>
  background: string
  backgroundSecondary: string
  color: string
}

const lightTheme: Theme = {
  currentTheme: 'light',
  setCurrentTheme: () => {},
  background: color.grayLight,
  backgroundSecondary: color.white,
  color: color.black,
}

const darkTheme: Theme = {
  currentTheme: 'dark',
  setCurrentTheme: () => {},
  background: color.grayDark,
  backgroundSecondary: color.black,
  color: color.white,
}

const ThemeContext: React.FC = (props) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>('dark')
  const themeProps: Theme = currentTheme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.backgroundColor = themeProps.background
  }, [currentTheme, themeProps])

  themeProps.currentTheme = currentTheme
  themeProps.setCurrentTheme = setCurrentTheme

  return <ThemeProvider theme={themeProps}>{props.children}</ThemeProvider>
}

export default ThemeContext
