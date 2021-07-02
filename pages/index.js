import React from 'react'
import CONST from '../constants'
import useWindowSize from '../hooks/useWindowSize'
import Layout from '../components/layout'
import Main from '../components/columns/main'
import Extra from '../components/columns/extra'
import Sidebar from '../components/columns/sidebar'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Navigation</Sidebar>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extras</Extra>}
    </Layout>
  )
}

export default HomePage
