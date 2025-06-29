import React, { useState } from 'react'
import Header from "./components/Header.jsx"
import styles from "./App.module.css"
function App() {

  return (
    <div>

        <Header/>
        <div className={styles.body}></div>

    </div>
  )
}

export default App