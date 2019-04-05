import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Drawer from '..'

storiesOf('Drawer', module)
  .add('default', () => (
    <LocalStateProvider initialState={false}>
      <LocalStateConsumer>
        {({ state: opened, setState: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!opened)}>Toggle Drawer</Button>
            <Drawer opened={opened} onClose={() => onOpen(false)}>
              <Button>Button 1</Button>
              <Spacer />
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Drawer>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with scroll', () => (
    <LocalStateProvider initialState={false}>
      <LocalStateConsumer>
        {({ state: opened, setState: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!opened)}>Toggle Drawer</Button>
            <Drawer opened={opened} onClose={() => onOpen(false)}>
              {Array.from({ length: 30 }, (v, k) => k).map(value => (
                <Button key={value}>Button {value}</Button>
              ))}
            </Drawer>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with Backdrop', () => (
    <LocalStateProvider initialState={false}>
      <LocalStateConsumer>
        {({ state: opened, setState: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!opened)}>Toggle Drawer</Button>
            <Drawer opened={opened} hasBackdrop onClose={() => onOpen(false)}>
              {Array.from({ length: 30 }, (v, k) => k).map(value => (
                <Button key={value}>Button {value}</Button>
              ))}
            </Drawer>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
