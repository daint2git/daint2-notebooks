import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import toMs from 'components/utils/helpers/toMs'
import toPx from 'components/utils/helpers/toPx'
import getFullHeightOfElement from 'components/utils/helpers/getFullHeightOfElement'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Collapse(props) {
  const { children, className, in: inProp, timeout } = props

  const handleEnter = useCallback(
    element => {
      element.style.height = '0'
      element.style.transitionDuration = toMs(timeout)
    },
    [timeout],
  )

  const handleEntering = useCallback(element => {
    element.style.height = toPx(element.scrollHeight)
  }, [])

  // const handleEntered = element => {

  // }

  const handleExit = useCallback(element => {
    element.style.height = toPx(getFullHeightOfElement(element))
  }, [])

  const handleExiting = useCallback(element => {
    element.style.height = '0'
  }, [])

  return (
    <Transition
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onEntering={handleEntering}
      // onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      appear
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
