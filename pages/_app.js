import React, { useState, useEffect } from 'react'

import '../styles/app.css'
import useWindowSize from '../hooks/useWindowSize'
import StoreContext from '../store'
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  const size = useWindowSize()
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    setTheme(theme)
  })

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    const $html = document.querySelector('html')
    $html.setAttribute('class', theme)
  }, [theme])
  
  

  return (
    <StoreContext.Provider value={{ theme, changeTheme,size }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}


  

export default MyApp
