import React from 'react'
import styles from '../styles/projectHeader.module.scss'

const ProjectHeader = ({ description, title, img }) => {
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <div className={styles.info}>
          <h4>{title}</h4>
          <h1>{description}</h1>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt='' data-speed='0.1' />
      </div>
    </div>
  )
}

export default ProjectHeader
