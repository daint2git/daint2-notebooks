import React from 'react'
import NextApp, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { ThemeProvider } from 'context/ThemeContext'
import { PageProvider } from 'context/PageContext'

import 'components/utils/app.scss'

class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <ThemeProvider>
          <PageProvider currentPage={{ asPath: router.asPath, pathname: router.pathname }}>
            <Component {...pageProps} />
          </PageProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

Router.events.on('routeChangeStart', () => NProgress.start())

Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`
  }
  NProgress.done()
})

Router.events.on('routeChangeError', () => NProgress.done())

export default App
