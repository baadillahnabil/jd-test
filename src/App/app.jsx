/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import styles from './styles'
const useStyles = createUseStyles(styles)

const App = () => {
  const classes = useStyles()

  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('auth_key'))

  const movePage = (to) => {
    if (to === 'login') setIsLoggedIn(false)
    else if (to === 'dashboard') setIsLoggedIn(true)
  }

  return (
    <div className={classes.root}>
      {isLoggedIn ? <Dashboard movePage={movePage} /> : <Login movePage={movePage} />}
    </div>
  )
}

export default App
