import React from 'react'

import Avatar from '../avatar'
import Byline from '../byline'
import styles from './style.module.css'
import { formatDistanceToNowStrict } from 'date-fns'
import { ACTIONS } from '../../constants'
import IconButton from '../icon-button'
import Image from 'next/image'

function Tweet({ dateTime, text, children, src, href }) {
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

        <div className={styles.content}>
          {text && <p>{text}</p>}
          {src && <div className={styles.featuredWrapper}><Image src={src} width={960} height={540} className={styles.featuredImage} layout="responsive"/></div>}
          
        </div>
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
          {href && <a href={href} className={styles.link} target="_blank" rel='noreferrer'><strong>Bağlantıya Git</strong></a>}
        </footer>
      </div>
    </article>
  )
}

export default Tweet
