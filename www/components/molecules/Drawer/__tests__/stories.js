import React from 'react'
import { storiesOf } from '@storybook/react'

import { StateProvider, StateConsumer } from 'context/StateContext'
import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Drawer from '..'

storiesOf('Drawer', module)
  .add('default', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
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
      </StateConsumer>
    </StateProvider>
  ))
  .add('with scroll', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
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
      </StateConsumer>
    </StateProvider>
  ))
  .add('with Backdrop', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
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
      </StateConsumer>
    </StateProvider>
  ))
