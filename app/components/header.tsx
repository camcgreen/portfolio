'use client'

import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sphere from '@/app/components/Sphere'
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
    gsap.from(split.chars, {
      delay: 0,
      duration: 2,
      x: 40,
      y: 200,
      skewX: 50,
      ease: 'power4.out',
      stagger: {
        amount: 0.5,
      },
    })
  }, [])
  return (
    <header className={styles.header}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Sphere />
        <OrbitControls />
      </Canvas>
      {/* <h1 id='split'>
        I build interactive <br />
        experiences for the web.
      </h1> */}
    </header>
  )
}

export default Header
