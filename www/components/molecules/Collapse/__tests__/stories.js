import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'
import MenuList, { MenuItem } from 'components/molecules/MenuList'

import Collapse from '..'

storiesOf('Collapse', module)
  .add('default', () => (
    <LocalStateProvider initialValue={false}>
      <LocalStateConsumer>
        {({ value: isOpened, setValue: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Collapse</Button>
            <Collapse in={isOpened} style={{ marginTop: '30px', marginLeft: '20px' }}>
              <div>
                <Button>Button 1</Button>
                <Spacer />
                <Button>Button 2</Button>
                <Spacer />
                <Button>Button 3</Button>
              </div>
            </Collapse>
            <Spacer />
            <Button color="warning">abc</Button>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('with menu list', () => (
    <LocalStateProvider initialValue={false}>
      <LocalStateConsumer>
        {({ value: isOpened, setValue: onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Collapse</Button>
            <Collapse in={isOpened} style={{ marginTop: '30px', marginLeft: '20px' }}>
              <MenuList>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
              </MenuList>
            </Collapse>
            <Spacer />
            <Button color="warning">abc</Button>
          </>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
