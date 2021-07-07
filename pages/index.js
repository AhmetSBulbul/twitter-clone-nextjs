import React from 'react'
import Layout from '../components/layout'
import MainHeader from '../components/main-header'
import { TimelineProp } from '../components/icons'
import Tweet from '../components/tweet'
import IconButton from '../components/icon-button'

function HomePage() {
  return (
    <Layout>
      <MainHeader title="Home">
        <IconButton>
          <TimelineProp />
        </IconButton>
      </MainHeader>
      <Tweet
        dateTime={new Date('2021-06-05')}
        text={`May the Force Be With You!`}
      />
    </Layout>
  )
}

export default HomePage
