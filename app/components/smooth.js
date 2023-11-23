'use client'
import React, { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

const Smooth = () => {
  const pathname = usePathname()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
      window.history.scrollRestoration = 'manual'
      const smoother = ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        effects: true,
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
