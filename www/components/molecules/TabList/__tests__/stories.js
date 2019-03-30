import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'

import Tabs, { Tab } from '..'

const TabContainer = props => <div style={{ padding: '24px' }} {...props} />

storiesOf('TabList', module)
  .add('default', () => (
    <LocalStateProvider initialValue={0}>
      <LocalStateConsumer>
        {({ value: tabIndex, setValue: onTabIndexChange }) => (
          <div style={{ margin: '50px' }}>
            <Tabs value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with direction="column"', () => (
    <LocalStateProvider initialValue={0}>
      <LocalStateConsumer>
        {({ value: tabIndex, setValue: onTabIndexChange }) => (
          <div style={{ display: 'flex' }}>
            <Tabs direction="column" value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </div>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with isFullWidth', () => (
    <LocalStateProvider initialValue={0}>
      <LocalStateConsumer>
        {({ value: tabIndex, setValue: onTabIndexChange }) => (
          <>
            <Tabs isFullWidth value={tabIndex} onChange={value => onTabIndexChange(value)}>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tabs>
            {tabIndex === 0 && <TabContainer>Item One</TabContainer>}
            {tabIndex === 1 && <TabContainer>Item Two</TabContainer>}
            {tabIndex === 2 && <TabContainer>Item Three</TabContainer>}
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with textColor="primary" && indicatorColor="primary"', () => (
    <LocalStateProvider initialValue={0}>
      <LocalStateConsumer>
        {({ value: tabIndex, setValue: onTabIndexChange }) => (
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
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
