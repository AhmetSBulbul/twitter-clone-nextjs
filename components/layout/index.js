import React from 'react'
import cn from 'classnames'
import CONST from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'
import Sidebar from '../columns/sidebar'
import Main from '../columns/main'
import Extra from '../columns/extra'
import styles from './style.module.css'

function Layout({ children}) {
  const size = useWindowSize()
  
  return (
    <div
      className={cn([styles.layout])} style={{'--mobile-vh': `${size.height}px`}} //column must override stack class if it's true. classNames must be in list to avoid override errors.
    >
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Navigation</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extras</Extra>}

    </div>
  )
}

export default Layout
