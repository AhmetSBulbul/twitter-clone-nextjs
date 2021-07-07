import React, {useContext} from 'react'
import cn from 'classnames'
import CONST from '../../constants'
import Sidebar from '../columns/sidebar'
import Main from '../columns/main'
import Extra from '../columns/extra'
import styles from './style.module.css'
import StoreContext from '../../store'

function Layout({ children }) {
  const context = useContext(StoreContext)

  return (
    <div
      className={cn([styles.layout])} //column must override stack class if it's true. classNames must be in list to avoid override errors.
    >
      <Sidebar flat={context.size.width < CONST.DESKTOP_SIZE}>Navigation</Sidebar>
      <Main>{children}</Main>
      {context.size.width > CONST.TABLET_SIZE && <Extra>Extras</Extra>}
    </div>
  )
}

export default Layout
