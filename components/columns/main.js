import React from 'react'

import cn from 'classnames'
import styles from './main.module.css'

function Main({children, className, ...props }){
    return (<div className={cn([styles.container])}>{children}</div>)
}

export default Main
