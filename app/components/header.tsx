'use client'

import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Creative developer <br />
        for the web.
      </h1>
      <img src='/images/hero.jpeg' alt='' />
    </header>
  )
}

export default Header
