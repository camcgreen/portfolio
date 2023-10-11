'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/header.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Header = () => {
  useEffect(() => {
    const heading = document.getElementById('split')
    const split = new SplitText(heading, {
      type: 'chars, words, lines',
      linesClass: 'line-parent',
    })
    gsap.from(split.lines, {
      duration: 2,
      y: 200,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    })
  }, [])
  return (
    <header className={styles.header}>
      <h1 id='split'>
        I build interactive{' '}
        {/* <img
          src='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSmu5XUvpDP0zc-LlTqVH1namBVv3nPbzYKFokoSOO3o4wOKkmxaoyXVc0mEusL7mdvDaI5_qMBt67stt0'
          alt=''
          className={styles.img}
        /> */}
        <br />
        experiences for the web.
      </h1>
      <img src='/images/hero.jpeg' alt='' />
    </header>
  )
}

export default Header
