import React from 'react'
import PropTypes from 'prop-types'

import noop from 'components/utils/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Tab = React.forwardRef((props, ref) => {
  const { children, isActived, ...other } = props
  return (
    <div className={cssModules`tab`} data-active={isActived} ref={ref} {...other}>
      {children}
    </div>
  )
})

Tab.propTypes = {
  children: PropTypes.node,
  isActived: PropTypes.bool,
}

const tabListRef = React.createRef()
const indicatorRef = React.createRef()

function TabList(props) {
  const {
    children,
    className,
    direction,
    textColor,
    indicatorColor,
    isFullWidth,
    value,
    onChange,
    ...other
  } = props
  const tabsRef = []

  React.useEffect(() => {
    const { ref: tabRef } = tabsRef.find(tabRef => tabRef.index === value)
    const rectOfTab = tabRef.current.getBoundingClientRect()
    const rectOfTabList = tabListRef.current.getBoundingClientRect()
    const styleOfIndicator = indicatorRef.current.style

    styleOfIndicator.left = `${rectOfTab.left - rectOfTabList.left}px`
    styleOfIndicator.bottom =
      direction === 'column'
        ? `${rectOfTabList.bottom - rectOfTab.bottom}px`
        : `${rectOfTab.bottom - rectOfTabList.bottom}px`
    styleOfIndicator.width = `${rectOfTab.width}px`
  }, [direction, tabsRef, value])

  return (
    <React.Fragment>
      <div
        className={cssModules`root ${textColor} ${className}`}
        data-full-width={isFullWidth}
        {...other}
      >
        <div className={cssModules`tab-list ${direction}`} ref={tabListRef}>
          {React.Children.map(children, (child, index) => {
            const ref = React.createRef()
            tabsRef.push({ index, ref })
            return React.cloneElement(child, {
              isActived: index === value,
              onClick: () => onChange(index),
              ref,
            })
          })}
        </div>
        <span className={cssModules`indicator ${indicatorColor}`} ref={indicatorRef} />
      </div>
    </React.Fragment>
  )
}

TabList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
  textColor: PropTypes.oneOf(['primary', 'light']),
  indicatorColor: PropTypes.oneOf(['primary', 'light']),
  isFullWidth: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

TabList.defaultProps = {
  direction: 'row',
  textColor: 'light',
  indicatorColor: 'light',
  isFullWidth: false,
  value: 0,
  onChange: noop,
}

export { Tab }
export default TabList
