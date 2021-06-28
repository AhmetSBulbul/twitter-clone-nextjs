import React from "react";
import cn from "classnames";
import Button from "./button";
import styles from "./nav-button.module.css"

function NavButton ({children , selected , notify, ...props}){
    return <Button type="button" className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>{children}
    {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
}

export default NavButton