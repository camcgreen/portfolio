'use client'

import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { TransformControls } from '@react-three/drei'
import { BlendFunction } from 'postprocessing'
import { EffectComposer, DotScreen } from '@react-three/postprocessing'
import { CustomDotScreen } from '@/app/shaders/PostProcess'
import Dome from '@/app/components/Dome'
import Sphere from '@/app/components/Sphere'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/header.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const titles = [
  "HEY, I'M CAM 👋",
  "I'M AN EXPERIENCED SOFTWARE ENGINEER 👨🏻‍💻",
  // "WITH SEVERAL YEARS' EXPERIENCE IN FRONTEND STACKS 📚",
  "I'D LOVE TO BUILD SOMETHING EXCITING WITH YOU 🧪",
]
const intervalMs = 4000

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((selectedIndex) => (selectedIndex + 1) % titles.length)
    }, intervalMs)

    return () => {
      clearInterval(interval)
    }
  }, [])
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

    setTimeout(() => {
      gsap.to(split.chars, {
        delay: 0,
        duration: 1,
        x: -40,
        y: -200,
        skewX: 50,
        ease: 'power4.in',
        stagger: {
          amount: 0.5,
        },
      })
    }, intervalMs - 1500)
  }, [selectedIndex])
  return (
    <header className={styles.header}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Dome />
        <Sphere position={[0, 0, 0]} scale={[1, 1, 1]} />
        <EffectComposer>
          <CustomDotScreen />
        </EffectComposer>
      </Canvas>
      <h1 id='split'>{titles[selectedIndex]}</h1>
      <img
        className={styles.scroll}
        src='/images/scroll.svg'
        alt='Scroll down indicator'
      />
    </header>
  )
}

export default Header
