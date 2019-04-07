import React from 'react'
import PropTypes from 'prop-types'

import renderNothing from 'components/utils/hocs/renderNothing'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import Backdrop from 'components/atoms/Backdrop'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Spin() {
  return <div className={cssModules`spin`} />
}

function Wave() {
  return (
    <div className={cssModules`wave`}>
      <span className={cssModules`dot`} />
      <span className={cssModules`dot`} />
      <span className={cssModules`dot`} />
    </div>
  )
}

function ShowHide() {
  return (
    <div className={cssModules`showHide`}>
      <span className={cssModules`dot`} />
      <span className={cssModules`dot`} />
      <span className={cssModules`dot`} />
    </div>
  )
}

function Loading(props) {
  const { type } = props
  let Component

  switch (type) {
    case 'spin':
      Component = Spin
      break
    case 'wave':
      Component = Wave
      break
    case 'showHide':
      Component = ShowHide
      break
    default:
      Component = renderNothing
  }

  return (
    <Backdrop type="inner">
      <div className={cssModules`root`}>
        <Component />
      </div>
    </Backdrop>
  )
}

Loading.propTypes = {
  type: PropTypes.oneOf(['spin', 'wave', 'showHide']),
}

Loading.defaultProps = {
  type: 'wave',
}

export default Loading
