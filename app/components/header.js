'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Dome from '@/app/components/Dome'
import Sphere from '@/app/components/Sphere'
import { initAnimLandingHeader } from '../utils/animations'
import { TITLES, INTERVAL_MS } from '../utils/macros'
import styles from '../styles/header.module.scss'

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((selectedIndex) => (selectedIndex + 1) % TITLES.length)
    }, INTERVAL_MS)
    return () => {
      clearInterval(interval)
    }
  }, [])
  useLayoutEffect(() => {
    initAnimLandingHeader(INTERVAL_MS)
  }, [selectedIndex])
  return (
    <header className={styles.header}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Dome />
        <Sphere position={[0, 0, 0]} scale={[1, 1, 1]} />
      </Canvas>
      <h1 id='split'>{TITLES[selectedIndex]}</h1>
      <img
        className={styles.scroll}
        src='/images/scroll.svg'
        alt='Scroll down indicator'
      />
    </header>
  )
}

export default Header
