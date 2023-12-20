'use client'
import React, { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { initAnimProjectHeader } from '../utils/animations'
import styles from '../styles/projectHeader.module.scss'

const ProjectHeader = ({ description, title, img }) => {
  useLayoutEffect(() => {
    initAnimProjectHeader()
  }, [])
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <div className={styles.info}>
          <h4 id='title'>{title}</h4>
          <h1 id='description'>{description}</h1>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt='' data-speed='0.1' id='img' />
      </div>
    </div>
  )
}

export default ProjectHeader
