'use client'

import React, { useEffect } from 'react'
import { animateSplitText } from '@/utils/animations'
import styles from '../styles/about.module.scss'

const About = () => {
  useEffect(() => {
    animateSplitText('.aboutText', '#about')
  }, [])
  return (
    <section className={styles.about} id='about'>
      {/* <h2>
        <span>I'm Cameron</span> and I'm a developer based in sunny Manchester,
        UK. I've worked with a wide range of clients
      </h2> */}
      <h2 className='aboutText'>
        <span>Our factory</span> is dedicated to the sophisticated production of
        fences that feature a galvanized steel core of the highest quality.
      </h2>
      <img src='/images/1.png' alt='' />
    </section>
  )
}

export default About
