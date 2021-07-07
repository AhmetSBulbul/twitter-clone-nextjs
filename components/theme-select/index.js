import React, { useState, useContext } from 'react'

import styles from './style.module.css'
import StoreContext from '../../store'
const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

function ThemeSelect({}) {
  const context = useContext(StoreContext)

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === context.theme}
            onChange={(e) => context.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
