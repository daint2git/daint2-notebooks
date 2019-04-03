import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import getFullHeightOfElement from 'components/utils/getFullHeightOfElement'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Collapse = props => {
  const { children, className, in: inProp, timeout } = props

  const handleEnter = element => {
    element.style.height = '0'
    element.style.transitionDuration = `${timeout}ms`
  }

  const handleEntering = element => {
    element.style.height = `${element.scrollHeight}px`
  }

  // const handleEntered = element => {

  // }

  const handleExit = element => {
    element.style.height = `${getFullHeightOfElement(element)}px`
  }

  const handleExiting = element => {
    element.style.height = '0'
  }

  return (
    <Transition
      {...props}
      appear
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onEntering={handleEntering}
      // onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      unmountOnExit
    >
      {(state, props) =>
        React.cloneElement(children, {
          ...props,
          className: cssModules`collapse ${className}`,
          'data-show': inProp,
        })
      }
    </Transition>
  )
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  in: PropTypes.bool,
  timeout: PropTypes.number,
}

Collapse.defaultProps = {
  in: false,
  timeout: 300,
}

export default Collapse
