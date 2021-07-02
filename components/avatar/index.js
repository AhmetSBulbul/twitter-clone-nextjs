import React from 'react'

import cn from 'classnames'

import styles from './style.module.css'

function Avatar({
  src = 'https://pbs.twimg.com/profile_images/1333457383562076166/vxVgU87X_400x400.jpg',
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
