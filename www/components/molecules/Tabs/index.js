import React from 'react'
import PropTypes from 'prop-types'

import noop from 'components/utils/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Tab = React.forwardRef(function Tab(
  { children, isActive, tabRef, ...other },
  ref,
) {
  return (
    <div
      className={cssModules`tab`}
      data-active={isActive}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  )
})

const tabListRef = React.createRef()
const indicatorRef = React.createRef()

function Tabs({
  children,
  className,
  direction,
  textColor,
  indicatorColor,
  isFullWidth,
  value,
  onChange,
  ...other
}) {
  const tabsRef = []
  React.useEffect(() => {
    const { tabRef } = tabsRef.find(tabRef => tabRef.index === value)
    const rectOfTab = tabRef.current.getBoundingClientRect()
    const rectOfTabList = tabListRef.current.getBoundingClientRect()

    indicatorRef.current.style.left = `${rectOfTab.left - rectOfTabList.left}px`
    indicatorRef.current.style.width = `${rectOfTab.width}px`

    indicatorRef.current.style.bottom =
      direction === 'column'
        ? `${rectOfTabList.bottom - rectOfTab.bottom}px`
        : `${rectOfTab.bottom - rectOfTabList.bottom}px`
  }, [value])

  return (
    <>
      <div
        className={cssModules`root ${textColor} ${className}`}
        data-full-width={isFullWidth}
        {...other}
      >
        <div className={cssModules`tab-list ${direction}`} ref={tabListRef}>
          {React.Children.map(children, (child, index) => {
            const ref = React.createRef()
            tabsRef.push({ index, tabRef: ref })
            return React.cloneElement(child, {
              isActive: index === value,
              onClick: () => onChange(index),
              ref,
            })
          })}
        </div>
        <span
          className={cssModules`indicator ${indicatorColor}`}
          ref={indicatorRef}
        />
      </div>
    </>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
  textColor: PropTypes.oneOf(['primary', 'light']),
  indicatorColor: PropTypes.oneOf(['primary', 'light']),
  isFullWidth: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

Tabs.defaultProps = {
  direction: 'row',
  textColor: 'light',
  indicatorColor: 'light',
  value: 0,
  onChange: noop,
}

export { Tab }
export default Tabs
