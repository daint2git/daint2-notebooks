import React from 'react'
import { storiesOf } from '@storybook/react'

import Tabs, { Tab } from '..'

const StateContext = React.createContext()

const StateComponent = ({ children, initialTabIndex = 0 }) => {
  const [tabIndex, setTabIndex] = React.useState(initialTabIndex)
  return (
    <StateContext.Provider value={{ tabIndex, onTabIndexChange: setTabIndex }}>
      {children}
    </StateContext.Provider>
  )
}

const TabContainer = ({ children }) => (
  <div style={{ padding: '24px' }}>{children}</div>
)

storiesOf('Tabs', module)
  .add('default', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ tabIndex, onTabIndexChange }) => (
          <>
            <Tabs value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with direction="column"', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ tabIndex, onTabIndexChange }) => (
          <div style={{ display: 'flex' }}>
            <Tabs
              direction="column"
              value={tabIndex}
              onChange={value => onTabIndexChange(value)}
            >
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with isFullWidth', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ tabIndex, onTabIndexChange }) => (
          <>
            <Tabs
              isFullWidth
              value={tabIndex}
              onChange={value => onTabIndexChange(value)}
            >
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with textColor="primary" && indicatorColor="primary"', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ tabIndex, onTabIndexChange }) => (
          <>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              value={tabIndex}
              onChange={value => onTabIndexChange(value)}
            >
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
