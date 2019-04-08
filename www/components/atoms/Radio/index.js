import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import isUndefined from 'components/utils/helpers/isUndefined'
import noop from 'components/utils/helpers/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import RadioGroupContext from 'components/molecules/RadioGroup/RadioGroupContext'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Radio = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    id,
    name: nameProp,
    checked: checkedProp,
    disabled,
    value,
    onChange: onChangeProp,
    style,
    ...other
  } = props

  let name = nameProp
  let checked = checkedProp
  let onChange = onChangeProp

  const radioGroup = useContext(RadioGroupContext)

  if (radioGroup) {
    if (isUndefined(name)) {
      name = radioGroup.name || ''
    }

    if (isUndefined(checked)) {
      checked = radioGroup.value === value
    }

    if (isUndefined(onChange)) {
      onChange = radioGroup.onChange || noop
    }
  }

  return (
    <div className={cssModules`root ${className}`} style={style} ref={ref}>
      <label className={cssModules`input`} htmlFor={id} disabled={disabled}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...other}
        />
        <div className={cssModules`radio`}>
          <div className={cssModules`icon`} data-checked={checked} data-disabled={disabled} />
        </div>
        {children && <div className={cssModules`children`}>{children}</div>}
      </label>
    </div>
  )
})

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
}

export default Radio
