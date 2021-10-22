import React from 'react'

import cn from 'classnames'

import styles from './style.module.css'

function Avatar({
  src = 'https://raw.githubusercontent.com/AhmetSBulbul/home-sweet-home/main/assets/headIllustration.svg',
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
