import React from "react";

import Button from "./button";
import styles from "./nav-button.module.css"

function NavButton ({children}){
    return <Button type="button" className={styles.navButton}>{children}</Button>
}

export default NavButton