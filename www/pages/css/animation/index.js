import React from 'react'

import Heading from 'components/atoms/Heading'
import Paper from 'components/atoms/Paper'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

import Output from './Output'
import data from './data'

function Content() {
  return (
    <Article title={data.title}>
      <Paper>
        {data.contents.map(child => (
          <React.Fragment key={child.title}>
            <Heading>{child.title}</Heading>
            {child.options.map(option => (
              <Output
                key={option.value}
                explain={option.children}
                property={child.title}
                value={option.value}
              >
                {option.value}
              </Output>
            ))}
          </React.Fragment>
        ))}
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
