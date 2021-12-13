import React from 'react'
import Layout from '../components/layout'
import MainHeader from '../components/main-header'
import { TimelineProp } from '../components/icons'
import Tweet from '../components/tweet'
import IconButton from '../components/icon-button'
import Image from 'next/image'

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
        text={`Merhaba! Ben Ahmet Safa Bülbül 👋`}
      />
      <Tweet
        dateTime={new Date('2021-06-05')}
        text="Freelance olarak web ve mobil yazılım geliştiriciliği yapmaktayım. Bağlantıya git butonuna tıklayarak siteme ulaşabilirsiniz."
        href="https://ahmetsafabulbul.com/"
       
      />
      <Tweet dateTime={new Date('2021-06-05')} href="https://www.rotasizkaravan.com/" text="Jamstack mimarisi ile gatsbyjs framework'ü kullanarak geliştirdiğim rotasız karavan resmi web sitesini inceleyin!" src="https://ahmetsafabulbul.com/portfolio/rotasiz-karavan/desktop.png" />
      <Tweet
        dateTime={new Date('2021-06-05')}
        text={`May the Force Be With You!`}
      />
    </Layout>
  )
}

export default HomePage
