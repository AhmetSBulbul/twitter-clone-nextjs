import React from 'react'

import cn from 'classnames'
import styles from './extra.module.css'

function Extra({children, className, ...props }){
    return (<div className={cn([styles.container])}>{children}</div>)
}

export default Extra