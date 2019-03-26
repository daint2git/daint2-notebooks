import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Drawer from '..'

const StateContext = React.createContext()

const StateComponent = ({ children, initialOpen = false }) => {
  const [open, setOpen] = React.useState(initialOpen)
  return (
    <StateContext.Provider value={{ isOpened: open, onOpen: setOpen }}>
      {children}
    </StateContext.Provider>
  )
}

storiesOf('Drawer', module)
  .add('default', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen }) => (
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
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with scroll', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen }) => (
          <>
            <Button onClick={() => onOpen(!isOpened)}>Toggle Drawer</Button>
            <Drawer isOpened={isOpened} onClose={() => onOpen(false)}>
              {Array.from({ length: 30 }, (v, k) => k).map(value => (
                <Button key={value}>Button {value}</Button>
              ))}
            </Drawer>
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
