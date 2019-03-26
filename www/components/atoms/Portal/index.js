import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const PortalWrapper = ({ children, ...other }) => (
  <div className={cssModules`root`} {...other}>
    {children}
  </div>
)

class Portal extends React.Component {
  componentDidMount() {
    this.setMountNode()

    // Only rerender if needed
    if (!this.props.disabledPortal) {
      this.forceUpdate()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.disabledPortal !== this.props.disabledPortal) {
      this.setMountNode()

      if (!this.props.disabledPortal) {
        this.forceUpdate()
      }
    }
  }

  componentWillUnmount() {
    this.mountNode = null
  }

  setMountNode() {
    if (this.props.disabledPortal) {
      return
    }

    this.mountNode = document.body
    return
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
