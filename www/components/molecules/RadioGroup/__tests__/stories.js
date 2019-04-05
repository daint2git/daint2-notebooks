import React from 'react'
import { storiesOf } from '@storybook/react'

import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import withRepeater from 'components/utils/hocs/withRepeater'
import Radio from 'components/atoms/Radio'

import RadioGroup from '..'

const data = [
  { value: '1', children: 'Radio 1' },
  { value: '2', children: 'Radio 2' },
  { value: '3', children: 'Radio 3' },
]

const Radios = withRepeater(Radio, 'data')

storiesOf('RadioGroup', module).add('default', () => (
  <LocalStateProvider initialState={{ value: '1' }}>
    <LocalStateConsumer>
      {({ state: { value }, setState }) => (
        <RadioGroup
          name="example"
          value={value}
          onChange={e => setState({ value: e.target.value })}
        >
          <Radios data={data} />
        </RadioGroup>
      )}
    </LocalStateConsumer>
  </LocalStateProvider>
))
