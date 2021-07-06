import React from 'react'

import cn from 'classnames'
import styles from './style.module.css'
import TextTitle from '../text/title'

function MainHeader({title='Home', children, className, ...props }) {
  return <div className={cn([styles.container])}>
    <TextTitle>{title}</TextTitle>
    <div className={styles.iconContainer}>{children}</div>
  </div>
}

export default MainHeader
