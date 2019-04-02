import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PortalWrapper = ({ children, hidden, ...other }) => {
  if (hidden) {
    return children
  }

  return (
    <div className={cssModules`root`} {...other}>
      {children}
    </div>
  )
}

PortalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
}

class Portal extends React.Component {
  componentDidMount() {
    this.setMountNode()

    const { disabledPortal } = this.props
    // Only rerender if needed
    if (!disabledPortal) {
      this.forceUpdate()
    }
  }

  componentDidUpdate(prevProps) {
    const { disabledPortal } = this.props

    if (prevProps.disabledPortal !== disabledPortal) {
      this.setMountNode()

      if (!disabledPortal) {
        this.forceUpdate()
      }
    }
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setMountNode() {
    const { disabledPortal } = this.props

    if (disabledPortal) {
      return
    }

    this.mountNode = document.body
  }

  render() {
    const { children, disabledPortal } = this.props

    if (disabledPortal) {
      return children
    }

    if (!this.mountNode) {
      return null
    }

    return ReactDOM.createPortal(children, this.mountNode)
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disabledPortal: PropTypes.bool,
}

export { PortalWrapper }
export default Portal
