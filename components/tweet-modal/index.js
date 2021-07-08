import React from 'react'

import cn from 'classnames'
import Avatar from '../avatar'
import styles from './style.module.css'
import {
  Emoji,
  Gif,
  Media
} from '../icons'
import IconButton from '../icon-button'

function TweetModal({ }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatarWrapper}>
          <Avatar/>
        </div>
        <div className={styles.body}>
          <textarea className={cn([styles.textarea, styles.resize])}></textarea>
        </div>
        <div className={styles.footer}>
          
        </div>
      </div>

    </div>
  )
}

export default TweetModal
