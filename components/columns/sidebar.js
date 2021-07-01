import React from 'react'

import cn from 'classnames'
import styles from './sidebar.module.css'
import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'

function Sidebar({flat}){
    return <div className={cn([styles.sidebarCol])}>
        <Navigation flat={flat}/>
        <ThemeButton big stretch>Tweet</ThemeButton>
        <ProfileBox/>
    </div>
}

export default Sidebar