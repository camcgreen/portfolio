'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import Header from './components/header'
import styles from './styles/page.module.scss'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 0.75,
      effects: true,
    })
  }, [])
  return (
    <main>
      <Header />
    </main>
  )
}
