'use client'

import React, { useEffect } from 'react'
import { animateSplitText } from '@/utils/animations'
import styles from '../styles/projects.module.scss'

const Projects = () => {
  useEffect(() => {
    animateSplitText('.projectText', '#projects')
  }, [])
  return (
    <section className={styles.projects} id='projects'>
      {/* <h2>
        I specialise in making apps and websites that{' '}
        <span>look and feel good</span>.
      </h2> */}
      <h2 className='projectText'>
        <span>Our products</span> are widely utilized in the construction of
        load-bearing structures and in all types of fencing, both in the
        industrial and private sectors.
      </h2>
      <div>
        <img src='/images/1.png' alt='' />
        <p>Project 1</p>
      </div>
      <div>
        <img src='/images/2.png' alt='' />
        <p>Project 2</p>
      </div>
      <div>
        <img src='/images/3.png' alt='' />
        <p>Project 3</p>
      </div>
    </section>
  )
}

export default Projects
