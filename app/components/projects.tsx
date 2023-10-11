'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/projects.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Projects = () => {
  useEffect(() => {}, [])
  return (
    <section className={styles.projects}>
      <div>
        <img src='/images/1.png' alt='' />
        <p>Project1</p>
      </div>
      <div>
        <img src='/images/1.png' alt='' />
        <p>Project1</p>
      </div>
      <div>
        <img src='/images/1.png' alt='' />
        <p>Project1</p>
      </div>
      <div>
        <img src='/images/1.png' alt='' />
        <p>Project1</p>
      </div>
    </section>
  )
}

export default Projects
