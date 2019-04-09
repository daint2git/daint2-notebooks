import React from 'react'
import { storiesOf } from '@storybook/react'

import { StateProvider, StateConsumer } from 'context/StateContext'
import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'
import MenuList, { MenuItem } from 'components/molecules/MenuList'

import Collapse from '..'

storiesOf('Collapse', module)
  .add('default', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
        {({ state: opened, setState: onToggle }) => (
          <>
            <Button onClick={() => onToggle(!opened)}>Toggle Collapse</Button>
            <Collapse in={opened} style={{ marginTop: '30px', marginLeft: '20px' }}>
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
      </StateConsumer>
    </StateProvider>
  ))
  .add('with menu list', () => (
    <StateProvider initialState={false}>
      <StateConsumer>
        {({ state: opened, setState: onToggle }) => (
          <>
            <Button onClick={() => onToggle(!opened)}>Toggle Collapse</Button>
            <Collapse in={opened} style={{ marginTop: '10px', marginLeft: '10px' }}>
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
      </StateConsumer>
    </StateProvider>
  ))
  .add('with menu list (default value is true)', () => (
    <StateProvider initialState={true}>
      <StateConsumer>
        {({ state: opened, setState: onToggle }) => (
          <>
            <Button onClick={() => onToggle(!opened)}>Toggle Collapse</Button>
            <Collapse in={opened} style={{ marginTop: '30px', marginLeft: '20px' }}>
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
      </StateConsumer>
    </StateProvider>
  ))
