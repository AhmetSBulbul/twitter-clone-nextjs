import React from 'react'

import NavButton from './nav-button'
import TextTitle from '../text/title'
import { Twitter } from '../icons'
import { BUTTONS } from '../../constants'

import styles from './navigation.module.css'

function Navigation({ selectedKey = 'home', flat = false }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter style={{ fontSize: 30 }} />
      </NavButton>

      {BUTTONS.map((item) => (
        <NavButton
          key={item.key}
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
