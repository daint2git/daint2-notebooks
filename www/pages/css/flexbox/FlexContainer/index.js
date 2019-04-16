import React, { useState, useMemo } from 'react'

import useViewport from 'components/utils/hooks/useViewport'
import useAnchorLinks from 'components/utils/hooks/useAnchorLinks'
import Button from 'components/atoms/Button'
import Heading from 'components/atoms/Heading'
import FlexContainer from 'components/atoms/FlexContainer'
import Paper from 'components/atoms/Paper'
import Note from 'components/atoms/Note'
import Spacer from 'components/atoms/Spacer'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import CodeExample from 'components/organisms/CodeExample'
import PropertyRadioGroup from 'components/organisms/cssContent/PropertyRadioGroup'

import {
  TITLES,
  DISPLAY,
  DIRECTION,
  WRAP,
  JUSTIFY_CONTENT,
  ALIGN_ITEMS,
  ALIGN_CONTENT,
} from './constants'

const DivGenerator = ({ length = 5 }) =>
  Array.from({ length }, (v, k) => k).map(value => (
    <div
      key={value}
      style={{
        backgroundColor: '#2196f3',
        color: '#fff',
        padding: '10px',
        border: '1px solid #1769aa',
        fontSize: value % 2 ? '12px' : '16px',
      }}
    >
      Item {value}
    </div>
  ))

function Output({ count }) {
  const memorized = useMemo(() => <DivGenerator length={count} />, [count])
  return memorized
}

const INITIAL_STATE = () => ({
  styles: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
  countItem: 5,
})

function FlexContainerContent() {
  useAnchorLinks(TITLES)
  const viewport = useViewport()

  const [state, setState] = useState(() => INITIAL_STATE().styles)
  const [countItem, setCountItem] = useState(() => INITIAL_STATE().countItem)
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value })

  return (
    <Paper>
      <AnchorLinkHeading>Flex container</AnchorLinkHeading>
      <FlexContainer direction={viewport.isSmall ? 'column' : 'row'}>
        <PropertyRadioGroup
          heading="display"
          name="display"
          value={state.display}
          onChange={onChange}
          data={DISPLAY.options}
        />
        <PropertyRadioGroup
          heading="flex-direction"
          name="flexDirection"
          value={state.flexDirection}
          onChange={onChange}
          data={DIRECTION.options}
        />
        <PropertyRadioGroup
          heading="flex-wrap"
          name="flexWrap"
          value={state.flexWrap}
          onChange={onChange}
          data={WRAP.options}
        />
        <PropertyRadioGroup
          heading="justify-content"
          name="justifyContent"
          value={state.justifyContent}
          onChange={onChange}
          data={JUSTIFY_CONTENT.options}
        />
        <PropertyRadioGroup
          heading="align-items"
          name="alignItems"
          value={state.alignItems}
          onChange={onChange}
          data={ALIGN_ITEMS.options}
        />
        <PropertyRadioGroup
          heading="align-content"
          name="alignContent"
          value={state.alignContent}
          onChange={onChange}
          data={ALIGN_CONTENT.options}
        />
        <FlexContainer direction="column">
          <Heading component="h4">Item</Heading>
          <Button size="large" onClick={() => setCountItem(countItem + 5)}>
            Add 5 items
          </Button>
          <Spacer size="small" />
          <Button
            size="large"
            color="danger"
            onClick={() => setCountItem(countItem ? countItem - 5 : 0)}
          >
            Remove 5 items
          </Button>
          <Spacer size="small" />
          <Button
            size="large"
            color="info"
            onClick={() => {
              setState(INITIAL_STATE().styles)
              setCountItem(INITIAL_STATE().countItem)
            }}
          >
            Reset All
          </Button>
        </FlexContainer>
      </FlexContainer>

      <Spacer />
      <CodeExample
        language="css"
        style={state}
        input={`
          {
            display: ${state.display};
            flex-direction: ${state.flexDirection};
            flex-wrap: ${state.flexWrap};
            justify-content: ${state.justifyContent};
            align-items: ${state.alignItems};
            align-content: ${state.alignContent};
          }
        `}
        output={<Output count={countItem} />}
      />
      <Spacer />
      <Note
        color="warning"
        size="large"
        innerHtml={`
          The <code>flex-flow</code> property is a shorthand property for:
          &ndash;&nbsp;<code>flex-direction</code>
          &ndash;&nbsp;<code>flex-wrap</code>

          The <code>place-content</code> property is a shorthand property for:
          &ndash;&nbsp;<code>align-content</code>
          &ndash;&nbsp;<code>justify-content</code>
          `}
      />
    </Paper>
  )
}

export default FlexContainerContent
