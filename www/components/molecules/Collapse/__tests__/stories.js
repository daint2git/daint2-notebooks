import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/atoms/Button'
import Spacer from 'components/atoms/Spacer'

import Collapse from '..'

const StateContext = React.createContext()

const StateComponent = ({ children, initialOpen = false }) => {
  const [open, setOpen] = React.useState(initialOpen)
  return (
    <StateContext.Provider value={{ isOpened: open, onOpen: setOpen }}>
      {children}
    </StateContext.Provider>
  )
}

storiesOf('Collapse', module).add('default', () => (
  <StateComponent>
    <StateContext.Consumer>
      {({ isOpened, onOpen }) => (
        <>
          <Button onClick={() => onOpen(!isOpened)}>Toggle Collapse</Button>
          <Collapse in={isOpened} style={{ marginTop: '30px', marginLeft: '20px' }}>
            <div>
              <Button>Button 1</Button>
              <Spacer />
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </div>
          </Collapse>
          <Spacer />
          <Button color="warning">abc</Button>
        </>
      )}
    </StateContext.Consumer>
  </StateComponent>
))
