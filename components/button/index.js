import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './style.module.css'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({ stretch = false, children, className, ...props }) {
  const CurrBtn = props.href ? LinkButton : BaseButton

  return (
    <CurrBtn
      type="button"
      className={cn(styles.button, stretch && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </CurrBtn>
  )
}

export default Button
