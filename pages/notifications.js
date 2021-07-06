import React from 'react'
import Layout from '../components/layout'
import MainHeader from '../components/main-header'
import {Options} from '../components/icons'

function NotificationsPage() {
  return (
    <Layout>
      <MainHeader title='Notifications'>
        <Options/>
      </MainHeader>
    </Layout>
  )
}

export default NotificationsPage
