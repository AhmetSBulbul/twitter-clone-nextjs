import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Stack({gap = 10, column = false, children}) {
    return (
        <div
            className={cn([styles.stack, column && styles.column])} //column must override stack class if it's true. classNames must be in list to avoid override errors.
            style={{ '--gap': `${gap}px`}}
        >
            {children}

        </div>
    )
}

export default Stack