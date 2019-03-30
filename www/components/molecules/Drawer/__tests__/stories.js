import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Drawer from '..'

storiesOf('Drawer', module)
  .add('default', () => (
    <LocalStateProvider initialValue={false}>
      <LocalStateConsumer>
        {({ value: isOpened, setValue: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Drawer</Button>
            <Drawer isOpened={isOpened} onClose={() => onOpen(false)}>
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
    <LocalStateProvider initialValue={false}>
      <LocalStateConsumer>
        {({ value: isOpened, setValue: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Drawer</Button>
            <Drawer isOpened={isOpened} onClose={() => onOpen(false)}>
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
    <LocalStateProvider initialValue={false}>
      <LocalStateConsumer>
        {({ value: isOpened, setValue: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Drawer</Button>
            <Drawer isOpened={isOpened} hasBackdrop onClose={() => onOpen(false)}>
              {Array.from({ length: 30 }, (v, k) => k).map(value => (
                <Button key={value}>Button {value}</Button>
              ))}
            </Drawer>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
