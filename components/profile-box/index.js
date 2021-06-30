import React from 'react'

import cn from 'classnames'
import Avatar from '../avatar'
import styles from './style.module.css'
import {ArrowBottom} from '../icons'
import Button from '../button'
import TextBody from '../text/body'

function ProfileBox({ name = 'Ahmet Safa Bülbül', slug='ahmetsafablbl1'}){
    return (
       <Button className={cn([styles.box ])}>
           <Avatar/>
           <div className={styles.body}>
               <TextBody bold>{name}</TextBody>
               <TextBody className={styles.slug}>@{slug}</TextBody>
           </div>
           <ArrowBottom className={styles.icon}/>
       </Button> 
    )
    
}

export default ProfileBox