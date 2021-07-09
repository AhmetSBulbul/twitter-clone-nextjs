import React from 'react'

import cn from 'classnames'
import Avatar from '../avatar'
import styles from './style.module.css'
import {
  Emoji,
  Gif,
  Media,
  Close
} from '../icons'
import IconButton from '../icon-button'
import ThemeButton from '../theme-button'

function TweetModal({ }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        
        <div className={styles.header}>
          <IconButton><Close/></IconButton>
        </div>
        <div className={styles.body}>
          <div className={styles.avatarWrapper}>
            <Avatar/>
          </div>
          <textarea className={cn([styles.textarea, styles.resize])} rows='4' placeholder="Contact Me!"></textarea>
        </div>
        <div className={styles.footer}>
          <ThemeButton>Tweet</ThemeButton>
        </div>
      </div>

    </div>
  )
}

export default TweetModal
