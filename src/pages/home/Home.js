import styles from './Home.module.css'
import React from 'react'
import Transactionform from './Transactionform'

export default function Home() {
  return (
    <div className={styles.container} >
        <div className={styles.content} >
          transaction list
        </div>
        <div className={styles.sidebar} >
          <Transactionform/>
        </div>
    </div>
  )
}
