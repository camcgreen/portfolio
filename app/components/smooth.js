'use client'
import React, { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { detectMobile } from '../utils/helpers'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

const Smooth = () => {
  const pathname = usePathname()
  useLayoutEffect(() => {
    const isMobile = detectMobile()
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
      window.history.scrollRestoration = 'manual'
      const smoother = ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        effects: isMobile ? false : true,
      })
      ScrollTrigger.refresh()
      smoother.refresh()
    })
    return () => {
      ctx.revert()
    }
  }, [pathname])
  return null
}

export default Smooth
