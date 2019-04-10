import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import orderBy from 'lodash/orderBy'

import formatDate from 'components/utils/helpers/formatDate'
import SideBarContext from 'context/SideBarContext'
import BaseLink from 'components/atoms/BaseLink'
import Paper from 'components/atoms/Paper'
import Heading from 'components/atoms/Heading'
import Spacer from 'components/atoms/Spacer'
import SkillsBar from 'components/molecules/SkillsBar'
import Article from 'components/organisms/Article'
import PageLayout from 'components/templates/PageLayout'

function Content(props) {
  const { repos } = props
  const { onToggle } = useContext(SideBarContext)

  useEffect(() => {
    onToggle(false)
  }, [onToggle])

  const renderRepos = repos.map(repo => (
    <React.Fragment key={repo.id}>
      <BaseLink variant="external" href={repo.htmlUrl}>
        {`${formatDate(repo.createdAt)}  -  ${repo.htmlUrl}`}
      </BaseLink>
      <Spacer size="small" />
    </React.Fragment>
  ))

  return (
    <Article title="Personal Information">
      <Paper>
        <Heading>
          My name is Nguyen Tran Dai. I am a FrontEnd Web Developer.
          <br />I have a passion with FrontEnd technologies. When I have free time, I often read,
          study and share my knowledge for everyone.
        </Heading>
      </Paper>
      <Spacer />
      <Paper>
        <Heading>My Skills</Heading>
        <SkillsBar />
      </Paper>
      <Spacer />
      <Paper>
        <Heading>My Repos (public)</Heading>
        {renderRepos}
      </Paper>
    </Article>
  )
}

Content.propTypes = {
  repos: PropTypes.array,
}

function Page(props) {
  return (
    <PageLayout>
      <Content {...props} />
    </PageLayout>
  )
}

Page.getInitialProps = async () => {
  const res = await axios.get('https://api.github.com/users/daint2git/repos')
  const data = await res.data
  const repos = data.map(repo => ({
    id: repo.id,
    htmlUrl: repo.html_url,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
  }))
  const sortedRepos = orderBy(repos, 'createdAt', 'desc')

  return { repos: sortedRepos }
}

export default Page
