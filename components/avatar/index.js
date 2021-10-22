import React from 'react'

import cn from 'classnames'

import styles from './style.module.css'

function Avatar({
  src = 'https://avatars.githubusercontent.com/u/37499095?s=400&u=8e555dfbacf21003b864d3426c600e0b88e7cb98&v=4',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.avatar])} style={{ '--size': `${size}px` }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Avatar
