import React from 'react'

import cn from 'classnames'
import Avatar from '../avatar'
import styles from './style.module.css'
import { ArrowBottom } from '../icons'
import Button from '../button'
import TextBody from '../text/body'
import Byline from '../byline'

function ProfileBox({ flat = false, className, size = 47 }) {
  return (
    <Button className={cn([styles.box, className])}>
      <Avatar size={size} />
      {!flat && (
        <>
          <Byline column gap={2} className={styles.byline} />{' '}
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}

export default ProfileBox
