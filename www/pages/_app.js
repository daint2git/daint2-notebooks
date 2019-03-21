import React from 'react'
import App, { Container } from 'next/app'

import ThemeProvider from 'context/ThemeContext/ThemeProvider'
import 'components/utils/app.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
