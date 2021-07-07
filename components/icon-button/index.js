import React from 'react'
import cn from 'classnames'
import Button from '../button'
import styles from './style.module.css'

function IconButton({ className, children, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
