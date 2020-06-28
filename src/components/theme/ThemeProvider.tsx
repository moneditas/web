import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import color from './colors'

interface ITheme {
  currentTheme: string
  setCurrentTheme: Function
  background: string
  color: string
}

const lightTheme: ITheme = {
  currentTheme: 'light',
  setCurrentTheme: () => null,
  background: color.grayLight,
  color: color.black,
}

const darkTheme: ITheme = {
  currentTheme: 'dark',
  setCurrentTheme: () => null,
  background: color.grayDark,
  color: color.white,
}

const ThemeContext: React.FC = (props) => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark')
  const themeProps: ITheme = currentTheme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.backgroundColor =
      themeProps.background
  }, [currentTheme, themeProps])

  themeProps.currentTheme = currentTheme
  themeProps.setCurrentTheme = setCurrentTheme

  return <ThemeProvider theme={themeProps}>{props.children}</ThemeProvider>
}

export default ThemeContext
