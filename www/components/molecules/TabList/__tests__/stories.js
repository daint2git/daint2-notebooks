import React from 'react'
import { storiesOf } from '@storybook/react'

import { StateProvider, StateConsumer } from 'context/StateContext'

import TabList, { Tab } from '..'

const TabContainer = props => <div style={{ padding: '24px' }} {...props} />

storiesOf('TabList', module)
  .add('default', () => (
    <StateProvider initialState={0}>
      <StateConsumer>
        {({ state: tabIndex, setState: onTabIndexChange }) => (
          <div style={{ margin: '50px' }}>
            <TabList value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        )}
      </StateConsumer>
    </StateProvider>
  ))
  .add('with direction="column"', () => (
    <StateProvider initialState={0}>
      <StateConsumer>
        {({ state: tabIndex, setState: onTabIndexChange }) => (
          <div style={{ display: 'flex' }}>
            <TabList
              direction="column"
              value={tabIndex}
              onChange={value => onTabIndexChange(value)}
            >
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        )}
      </StateConsumer>
    </StateProvider>
  ))
  .add('with isFullWidth', () => (
    <StateProvider initialState={0}>
      <StateConsumer>
        {({ state: tabIndex, setState: onTabIndexChange }) => (
          <>
            <TabList isFullWidth value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </StateConsumer>
    </StateProvider>
  ))
  .add('with textColor="primary" && indicatorColor="primary"', () => (
    <StateProvider initialState={0}>
      <StateConsumer>
        {({ state: tabIndex, setState: onTabIndexChange }) => (
          <>
            <TabList
              textColor="primary"
              indicatorColor="primary"
              value={tabIndex}
              onChange={value => onTabIndexChange(value)}
            >
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </StateConsumer>
    </StateProvider>
  ))
