'use client'

import { Canvas } from '@react-three/fiber'
import FluidList from '@/app/components/FluidList'
import Item from '@/app/components/Item'
import Rig from '@/app/components/Rig'
import { gsap } from 'gsap'
import styles from '@/app/styles/projects.module.scss'

export default function Projects() {
  return (
    <main className={styles.container}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <FluidList Item={Item} />
        <Rig />
      </Canvas>
    </main>
  )
}
