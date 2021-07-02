import React from 'react'

import NavButton from './nav-button'
import TextTitle from '../text/title'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from '../icons'

import styles from './navigation.module.css'

const BUTTONS = [
  {
    key: 'home',
    icon: <Home />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    title: 'Notification',
    notify: 0
  },
  {
    key: 'messages',
    icon: <Messages />,
    title: 'Messages',
    notify: 4
  },
  {
    key: 'bookmarks',
    icon: <Bookmark />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ selectedKey, flat = false }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      {BUTTONS.map((item) => (
        <NavButton
          notify={item.notify > 0 && item.notify}
          selected={selectedKey === item.key}
        >
          {item.icon}
          {!flat && <TextTitle>{item.title}</TextTitle>}
        </NavButton>
      ))}
    </nav>
  )
}

export default Navigation
