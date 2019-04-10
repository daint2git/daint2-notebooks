import React from 'react'

import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import Paper from 'components/atoms/Paper'
import Spacer from 'components/atoms/Spacer'
import Text from 'components/atoms/Text'
import AnchorLinkHeading from 'components/molecules/AnchorLinkHeading'
import Article from 'components/organisms/Article'
import CodeExample from 'components/organisms/CodeExample'
import PageLayout from 'components/templates/PageLayout'

const HEADERS = ['Controlled components', 'Uncontrolled components']

function Content() {
  useTitleLinksFromHeaders(HEADERS)
  return (
    <Article title="Controlled components vs Uncontrolled components">
      <Paper>
        <AnchorLinkHeading>{HEADERS[0]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">
          Form data is handled by a <mark>React component</mark> (recommend)
        </Text>
        <CodeExample
          language="jsx"
          input={`
            render() {
              return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              )
            }
          `}
        />
      </Paper>
      <Spacer />
      <Paper>
        <AnchorLinkHeading>{HEADERS[1]}</AnchorLinkHeading>
        <Spacer />
        <Text size="large">
          Form data is handled by the <mark>DOM</mark> itself
        </Text>
        <Spacer size="small" />
        <Text size="large">
          Can use a <code>ref</code> to get form values from the <mark>DOM</mark>
        </Text>
        <Spacer size="small" />
        <Text size="large">Default values: </Text>
        <Spacer size="small" />
        <Text style={{ paddingLeft: '1rem' }}>
          Support <code>defaultChecked</code>: <code>{'<input type="checkbox" />'}</code> and{' '}
          <code>{'<input type="radio" />'}</code>
          <br />
          Support <code>defaultValue</code>: <code>{'<input type="text" />'}</code>,{' '}
          <code>{'<textarea>'}</code> and <code>{'<select>'}</code>
        </Text>
        <CodeExample
          language="jsx"
          input={`
            render() {
              return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      defaultValue="abc"
                      ref={this.inputRef}
                    />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              )
            }
          `}
        />
      </Paper>
    </Article>
  )
}

function Page(props) {
  return (
    <PageLayout>
      <Content {...props} />
    </PageLayout>
  )
}

export default Page
