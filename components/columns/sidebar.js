import React from 'react'

import cn from 'classnames'
import styles from './sidebar.module.css'
import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import {Tweet} from '../icons'

function Sidebar({ flat = false }) {
  return (
    <div className={cn([styles.sidebarCol])}>
      <Navigation flat={flat} />
      <ThemeButton big stretch={!flat} className={styles.tweetBtnMargin}>
        {flat ? <Tweet/> : 'Tweet'}
      </ThemeButton>
      <ProfileBox flat={flat} size={39} className={styles.avatarMargin} />
    </div>
  )
}

export default Sidebar
