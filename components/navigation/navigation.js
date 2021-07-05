import React from 'react'
import {useRouter} from 'next/router'

import NavButton from './nav-button'
import TextTitle from '../text/title'
import { Twitter } from '../icons'
import { BUTTONS } from '../../constants'

import styles from './navigation.module.css'

function Navigation({ selectedKey = 'home', flat = false }) {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter style={{ fontSize: 30 }} />
      </NavButton>

      {BUTTONS.map((item) => (
        <NavButton
          key={item.key}
          notify={item.notify > 0 && item.notify}
          selected={router.pathname === item.path}
          href={item.path}
        className={styles.navButton}
        >
          {item.icon}
          {!flat && <TextTitle>{item.title}</TextTitle>}
        </NavButton>
      ))}
    </nav>
  )
}

export default Navigation
