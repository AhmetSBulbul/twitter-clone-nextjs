import React from 'react'
import Layout from '../components/layout'
import MainHeader from '../components/main-header'
import { Options, Messages } from '../components/icons'

function MessagesPage() {
  return (
    <Layout>
      <MainHeader title="Messages">
        <Options />
        <Messages />
      </MainHeader>
    </Layout>
  )
}

export default MessagesPage
