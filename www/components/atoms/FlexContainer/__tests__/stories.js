import React, { useMemo } from 'react'
import { storiesOf } from '@storybook/react'

import randomIntFromInterval from 'components/utils/math/randomIntFromInterval'
import { LocalStateProvider, LocalStateConsumer } from 'context/LocalStateContext'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import Spacer from 'components/atoms/Spacer'

import FlexContainer from '..'

const style = {
  container: {
    backgroundColor: '#34495e',
    padding: '20px',
  },
  item: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    border: '1px solid #ffc107',
  },
}

const WRAP = [
  {
    value: 'nowrap',
    label: 'nowrap (default)',
  },
  {
    value: 'wrap',
    label: 'wrap',
  },
  {
    value: 'wrap-reverse',
    label: 'wrap-reverse',
  },
]

const DIRECTION = [
  {
    value: 'row',
    label: 'row (default)',
  },
  {
    value: 'row-reverse',
    label: 'row-reverse',
  },

  {
    value: 'column',
    label: 'column',
  },

  {
    value: 'column-reverse',
    label: 'column-reverse',
  },
]

const JUSTIFY_CONTENT = [
  {
    value: 'start',
    label: 'flex-start (default)',
  },
  {
    value: 'end',
    label: 'flex-end',
  },
  {
    value: 'center',
    label: 'center',
  },
  {
    value: 'between',
    label: 'space-between',
  },
  {
    value: 'around',
    label: 'space-around',
  },
]

const ALIGN_ITEMS = [
  {
    value: 'start',
    label: 'flex-start',
  },
  {
    value: 'end',
    label: 'flex-end',
  },
  {
    value: 'center',
    label: 'center',
  },
  {
    value: 'baseline',
    label: 'baseline',
  },
  {
    value: 'stretch',
    label: 'stretch (default)',
  },
]

/* eslint-disable react/prop-types */
const RadioButton = ({ value, label, name, ...other }) => (
  <div>
    <label htmlFor={`${name}-${value}`}>
      <input type="radio" id={`${name}-${value}`} value={value} name={name} {...other} />
      {label}
    </label>
  </div>
)
/* eslint-enable react/prop-types */

const FlexItem = props => (
  <div
    style={{
      ...style.item,
      fontSize: randomIntFromInterval(10, 20),
    }}
    {...props}
  />
)

const FlexItems = ({ length = 20 }) =>
  Array.from({ length }, (v, k) => k).map(value => <FlexItem key={value}>Item {value}</FlexItem>)

const MemorizedFlexItems = ({ number }) => {
  const memorized = useMemo(() => <FlexItems length={number} />, [number])
  return memorized
}

storiesOf('FlexContainer', module)
  .add('default', () => <FlexContainer style={style.container} />)
  .add('with items + inline', () => (
    <FlexContainer isInline style={style.container}>
      <FlexItems length={10} />
    </FlexContainer>
  ))
  .add('with items', () => (
    <FlexContainer style={style.container}>
      <FlexItems />
    </FlexContainer>
  ))
  .add('with wrap', () => (
    <>
      <Heading>nowrap</Heading>
      <FlexContainer wrap="nowrap" style={style.container}>
        <FlexItems />
      </FlexContainer>
      <Spacer />
      <Heading>wrap</Heading>
      <FlexContainer wrap="wrap" style={style.container}>
        <FlexItems />
      </FlexContainer>
      <Spacer />
      <Heading>wrap-reverse</Heading>
      <FlexContainer wrap="wrap-reverse" style={style.container}>
        <FlexItems />
      </FlexContainer>
    </>
  ))
  .add('with direction', () => (
    <>
      <Heading>row</Heading>
      <FlexContainer direction="row" style={style.container}>
        <FlexItems />
      </FlexContainer>
      <Spacer />
      <Heading>row-reverse</Heading>
      <FlexContainer direction="row-reverse" style={style.container}>
        <FlexItems />
      </FlexContainer>
      <Spacer />
      <Heading>column</Heading>
      <FlexContainer direction="column" style={style.container}>
        <FlexItems />
      </FlexContainer>
      <Spacer />
      <Heading>column-reverse</Heading>
      <FlexContainer direction="column-reverse" style={style.container}>
        <FlexItems />
      </FlexContainer>
    </>
  ))
  .add('custom', () => (
    <LocalStateProvider
      initialState={{
        wrap: 'nowrap',
        direction: 'row',
        justifyContent: 'start',
        alignItems: 'stretch',
        number: 5,
      }}
    >
      <LocalStateConsumer>
        {({ state, setState }) => {
          return (
            <div>
              <div style={{ display: 'flex', marginBottom: '50px' }}>
                <div>
                  <Heading component="h5">wrap</Heading>
                  {WRAP.map(item => (
                    <RadioButton
                      key={`wrap-${item.value}`}
                      name="wrap"
                      value={item.value}
                      label={item.label}
                      checked={item.value === state.wrap}
                      onChange={() => setState({ ...state, wrap: item.value })}
                    />
                  ))}
                </div>
                <div style={{ padding: '20px' }} />
                <div>
                  <Heading component="h5">direction</Heading>
                  {DIRECTION.map(item => (
                    <RadioButton
                      key={`direction-${item.value}`}
                      name="direction"
                      value={item.value}
                      label={item.label}
                      checked={item.value === state.direction}
                      onChange={() => setState({ ...state, direction: item.value })}
                    />
                  ))}
                </div>
                <div style={{ padding: '20px' }} />
                <div>
                  <Heading component="h5">justifyContent</Heading>
                  {JUSTIFY_CONTENT.map(item => (
                    <RadioButton
                      key={`justifyContent-${item.value}`}
                      name="justifyContent"
                      value={item.value}
                      label={item.label}
                      checked={item.value === state.justifyContent}
                      onChange={() => setState({ ...state, justifyContent: item.value })}
                    />
                  ))}
                </div>
                <div style={{ padding: '20px' }} />
                <div>
                  <Heading component="h5">alignItems</Heading>
                  {ALIGN_ITEMS.map(item => (
                    <RadioButton
                      key={`alignItems-${item.value}`}
                      name="alignItems"
                      value={item.value}
                      label={item.label}
                      checked={item.value === state.alignItems}
                      onChange={() => setState({ ...state, alignItems: item.value })}
                    />
                  ))}
                </div>
                <div>
                  <Button onClick={() => setState({ ...state, number: state.number + 5 })}>
                    Add 5 items
                  </Button>
                  <Button
                    color="danger"
                    onClick={() =>
                      setState({ ...state, number: state.number ? state.number - 5 : 0 })
                    }
                  >
                    Remove 5 items
                  </Button>
                </div>
              </div>

              <div>
                <FlexContainer
                  wrap={state.wrap}
                  direction={state.direction}
                  vertical={state.justifyContent}
                  horizontal={state.alignItems}
                  style={style.container}
                >
                  <MemorizedFlexItems number={state.number} />
                </FlexContainer>
              </div>
            </div>
          )
        }}
      </LocalStateConsumer>
    </LocalStateProvider>
  ))
