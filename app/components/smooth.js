'use client'
import React, { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { detectMobile } from '../utils/helpers'
import { refreshScrollTriggerAfterImagesLoaded } from '../utils/animations'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

const Smooth = () => {
  const pathname = usePathname()
  useLayoutEffect(() => {
    const isMobile = detectMobile()
    refreshScrollTriggerAfterImagesLoaded()
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
      window.history.scrollRestoration = 'manual'
      ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        effects: isMobile ? false : true,
      })
    })
    return () => {
      ctx.revert()
    }
  }, [pathname])
  return null
}

export default Smooth
