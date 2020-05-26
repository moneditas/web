import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

interface ITheme {
  currentTheme: string,
  setCurrentTheme: Function,
  background: string,
  color: string,
}

const lightTheme: ITheme = {
  currentTheme: 'light',
  setCurrentTheme: () => null,
  background: '#F1F3F6',
  color: '#000000',
}

const darkTheme: ITheme = {
  currentTheme: 'dark',
  setCurrentTheme: () => null,
  background: '#2D2D2D',
  color: '#FFFFFF',
}

const ThemeContext: React.FC = (props) => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark')
  const themeProps: ITheme = currentTheme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.backgroundColor = themeProps.background
  }, [currentTheme, themeProps])

  themeProps.currentTheme = currentTheme
  themeProps.setCurrentTheme = setCurrentTheme

  return (
    <ThemeProvider theme={themeProps}>
      {props.children}
    </ThemeProvider>
  )
}

export default ThemeContext
