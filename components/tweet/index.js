import React from 'react'

import Avatar from '../avatar'
import Byline from '../byline'
import styles from './style.module.css'
import { formatDistanceToNowStrict } from 'date-fns'
import { ACTIONS } from '../../constants'
import IconButton from '../icon-button'

function Tweet({ dateTime, text }) {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      {/*body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <Byline column={false} gap={5} />{' '}
          <span>• {formatDistanceToNowStrict(dateTime)}</span>
        </header>

        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          {ACTIONS.map((action) => {
            return (
              <div className={styles.footerItem} key={action.key}>
                <IconButton className={styles.actionBtn}>
                  {action.icon}
                </IconButton>
                {action.count > 0 && <span>{action.count}</span>}
              </div>
            )
          })}
        </footer>
      </div>
    </article>
  )
}

export default Tweet
