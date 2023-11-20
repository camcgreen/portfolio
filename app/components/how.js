import React from 'react'
import styles from '../styles/goal.module.scss'

const How = ({ copy, img }) => {
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <h2>HOW IT WORKS.</h2>
        <div className={styles.copy}>{copy}</div>
      </div>
    </div>
  )
}

export default How
