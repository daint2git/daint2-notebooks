import React from 'react'

import Button from 'components/atoms/Button'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Content = ({ direction, children }) => (
  <div className={cssModules`content ${direction}`}>{children}</div>
)

const IconButton = ({
  Icon = () => null,
  children,
  direction = 'row',
  ...other
}) => (
  <Button {...other}>
    <Content direction={direction}>
      <Icon />
      {children}
    </Content>
  </Button>
)

export default IconButton
