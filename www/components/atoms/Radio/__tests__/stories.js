import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import withRepeater from 'components/utils/hocs/withRepeater'
import FlexContainer from 'components/atoms/FlexContainer'

import Radio from '..'

const data = [
  { value: '1', children: 'Radio 1' },
  { value: '2', children: 'Radio 2' },
  { value: '3', children: 'Radio 3' },
]

/* eslint-disable react/prop-types */
const CustomRadio = ({ value, checked, onChange, ...other }) => (
  <Radio value={value} checked={value === checked} onChange={onChange} {...other} />
)
/* eslint-enable react/prop-types */

const Radios = withRepeater(CustomRadio, 'data')

storiesOf('Radio', module)
  .add('default', () => (
    <LocalStateProvider initialState={{ checked: '1' }}>
      <LocalStateConsumer>
        {({ state: { checked }, setState }) => (
          <FlexContainer>
            <Radios
              name="example"
              data={data}
              checked={checked}
              onChange={e => setState({ checked: e.target.value })}
            />
          </FlexContainer>
        )}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
  .add('disabled', () => (
    <FlexContainer>
      <Radio disabled checked>
        disabled - checked
      </Radio>
      <Radio disabled>disabled</Radio>
    </FlexContainer>
  ))
