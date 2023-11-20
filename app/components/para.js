import React from 'react'
import styles from '../styles/para.module.scss'

const Para = ({ heading, copy, children }) => {
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <h2>{heading}</h2>
        <div className={styles.copy}>{copy}</div>
      </div>
      {children}
    </div>
  )
}

export default Para
