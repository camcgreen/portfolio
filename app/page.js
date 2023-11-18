'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import Nav from './components/nav'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import styles from './styles/page.module.scss'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      effects: true,
    })
  }, [])
  return (
    <main>
      <Header />
      <About />
      <Projects />
    </main>
  )
}
