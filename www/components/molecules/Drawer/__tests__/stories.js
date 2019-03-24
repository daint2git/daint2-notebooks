import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Drawer from '..'

const StateContext = React.createContext()

const StateComponent = ({ children, initialOpen = false }) => {
  const [open, setOpen] = React.useState(initialOpen)
  return (
    <StateContext.Provider value={{ isOpen: open, onOpen: setOpen }}>
      {children}
    </StateContext.Provider>
  )
}

storiesOf('Drawer', module)
  .add('default', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpen, onOpen }) => (
          <>
            <Drawer isOpen={isOpen} onClose={() => onOpen(false)}>
              <Button>Button 1</Button>
              <Spacer />
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </Drawer>
            <div>
              <Button onClick={() => onOpen(!isOpen)}>Toggle Drawer</Button>
            </div>
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with scroll', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpen, onOpen }) => (
          <>
            <Drawer isOpen={isOpen} onClose={() => onOpen(false)}>
              {Array.from({ length: 30 }, (v, k) => k)
                .map(k => k)
                .map(value => (
                  <Button key={value} isFullWidth>
                    Button {value}
                  </Button>
                ))}
            </Drawer>
            <div>
              <Button onClick={() => onOpen(!isOpen)}>Toggle Drawer</Button>
            </div>
          </>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
