import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Layout({ children }) {
  return (
    <div
      className={cn([styles.layout])} //column must override stack class if it's true. classNames must be in list to avoid override errors.
    >
      {children}
    </div>
  )
}

export default Layout
