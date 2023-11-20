import React from 'react'
import Para from './para'
import styles from '../styles/goal.module.scss'

const Goal = ({ copy, img }) => {
  return (
    <div className={styles.container}>
      <Para heading='THE GOAL.' copy={copy}>
        <div className={styles.imgContainer}>
          <img src={img} alt='' data-speed='0.1' />
        </div>
      </Para>
    </div>
  )
}

export default Goal
