import React from 'react'

import getDisplayName from 'components/utils/getDisplayName'
import configureStore from './configureStore'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return configureStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

const withReduxStore = Component =>
  class WithReduxStore extends React.Component {
    static displayName = `withReduxStore(${getDisplayName(Component)})`

    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxState = getOrCreateStore()
      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxState = reduxState

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxState.getState(),
      }
    }

    constructor(props) {
      super(props)
      this.reduxState = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <Component {...this.props} reduxState={this.reduxState} />
    }
  }

export default withReduxStore
