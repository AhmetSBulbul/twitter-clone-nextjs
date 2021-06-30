import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Button({ stretch = false, children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(styles.button, stretch && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
