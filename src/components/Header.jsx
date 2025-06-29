import React from 'react'
import styles from "./Header.module.css"
import ProductCard from './ProductCard'
function header() {
  return (
    <div className={styles.header}>
        <ProductCard/>
    </div>
  )
}

export default header