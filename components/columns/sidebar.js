import React, {useState} from 'react'

import cn from 'classnames'
import styles from './sidebar.module.css'
import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import { SendTweet } from '../icons'
import TweetModal from '../tweet-modal'

function Sidebar({ flat = false }) {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className={cn([styles.sidebarCol])}>
      <Navigation flat={flat} />
      <ThemeButton big stretch={!flat} className={styles.tweetBtnMargin} onClick={() => setIsShowModal(true)}>
        {flat ? <SendTweet /> : 'Tweet'}
      </ThemeButton>

      {/* tweet-popup*/}
      {isShowModal && <TweetModal onClick={() => setIsShowModal(false)}/>}

      <ProfileBox flat={flat} size={39} className={styles.avatarMargin} />
    </div>
  )
}

export default Sidebar
