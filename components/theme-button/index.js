import React from 'react'
import cn from 'classnames'
import Button from '../button'
import styles from './style.module.css'

function ThemeButton({ className, big = false, children, ...props }) {
  return (
    <Button
      type="button"
      className={cn(styles.button, big && styles.big, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
