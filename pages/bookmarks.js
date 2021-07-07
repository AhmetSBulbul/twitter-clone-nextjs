import React from 'react'
import Layout from '../components/layout'
import MainHeader from '../components/main-header'
import { More } from '../components/icons'

function BookmarksPage() {
  return (
    <Layout>
      <MainHeader title="Bookmarks">
        <More />
      </MainHeader>
    </Layout>
  )
}

export default BookmarksPage
