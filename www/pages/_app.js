import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

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

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`
  }
})

export default MyApp
