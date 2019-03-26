import React from 'react'
import { storiesOf } from '@storybook/react'

import { Javascript, Html, Css, File } from 'components/atoms/Icon/languages'

import MenuList, { MenuItem, MenuItemIcon, MenuItemText } from '..'

const StateContext = React.createContext()

const menus = Array.from({ length: 30 }, (v, k) => k).map(value => <MenuItem>MenuItem 1</MenuItem>)

const StateComponent = ({ children, initialOpen = false, initialShowSubMenu = false }) => {
  const [open, setOpen] = React.useState(initialOpen)
  const [isShow, showSubMenu] = React.useState(initialShowSubMenu)
  return (
    <StateContext.Provider value={{ isOpened: open, onOpen: setOpen, isShow, showSubMenu }}>
      {children}
    </StateContext.Provider>
  )
}

storiesOf('MenuList', module)
  .add('default', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen }) => (
          <MenuList isOpened={isOpened} onClose={() => onOpen(false)}>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with icon', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen }) => (
          <MenuList isOpened={isOpened} onClose={() => onOpen(false)}>
            <MenuItem>
              <Javascript width={20} height={20} />
              Javascript
            </MenuItem>
            <MenuItem>
              <Html width={20} height={20} />
              Html
            </MenuItem>
            <MenuItem>
              <Css width={20} height={20} />
              Css
            </MenuItem>
            <MenuItem>
              <File width={20} height={20} />
              Other
            </MenuItem>
          </MenuList>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  .add('with icon2', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen }) => (
          <MenuList isOpened={isOpened} onClose={() => onOpen(false)}>
            <MenuItem>
              <MenuItemIcon>
                <Javascript width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Javascript</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <Html width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Html</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <Css width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Css</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <File width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Other</MenuItemText>
            </MenuItem>
          </MenuList>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
  // .add('with menu in menu (1)', () => (
  //   <StateComponent>
  //     <StateContext.Consumer>
  //       {({ isOpened, onOpen }) => (
  //         <MenuList isOpened={isOpened} onClose={() => onOpen(false)}>
  //           <MenuItem>Item 1</MenuItem>
  //           <MenuItem>Item 2</MenuItem>
  //           <MenuItem>
  //             Item 3
  //             <MenuList>
  //               <MenuItem>Item 1</MenuItem>
  //               <MenuItem>Item 2</MenuItem>
  //               <MenuItem>Item 3</MenuItem>
  //             </MenuList>
  //           </MenuItem>
  //         </MenuList>
  //       )}
  //     </StateContext.Consumer>
  //   </StateComponent>
  // ))
  .add('with menu in menu (2)', () => (
    <StateComponent>
      <StateContext.Consumer>
        {({ isOpened, onOpen, isShow, showSubMenu }) => (
          <MenuList isOpened={isOpened} onClose={() => onOpen(false)}>
            <MenuItem>
              <MenuItemIcon>
                <Javascript width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Javascript</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <Html width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Html</MenuItemText>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <Css width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>Css</MenuItemText>
            </MenuItem>
            <MenuItem {...(isShow ? { style: { display: 'block' } } : {})}>
              <div style={{ display: 'flex', width: '100%' }} onClick={() => showSubMenu(!isShow)}>
                <MenuItemIcon>
                  <File width={20} height={20} />
                </MenuItemIcon>
                <MenuItemText>Other</MenuItemText>
              </div>
              <MenuList>
                <MenuItem>
                  <MenuItemIcon>
                    <Javascript width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>Javascript</MenuItemText>
                </MenuItem>
                <MenuItem>
                  <MenuItemIcon>
                    <Html width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>Html</MenuItemText>
                </MenuItem>
                <MenuItem>
                  <MenuItemIcon>
                    <Css width={20} height={20} />
                  </MenuItemIcon>
                  <MenuItemText>
                    <p>Css 1</p>
                    <p>Css 2</p>
                  </MenuItemText>
                </MenuItem>
              </MenuList>
            </MenuItem>
            <MenuItem>
              <div>
                <MenuItemIcon>
                  <Css width={20} height={20} />
                </MenuItemIcon>
                <MenuItemText>Css</MenuItemText>
              </div>
              <MenuList>{menus}</MenuList>
            </MenuItem>
          </MenuList>
        )}
      </StateContext.Consumer>
    </StateComponent>
  ))
