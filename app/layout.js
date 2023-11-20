'use client'
import './styles/globals.scss'
import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import localFont from 'next/font/local'
import Nav from './components/nav'
import Footer from './components/footer'

const HelveticaNeueExtended = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueExtended-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueExtended-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueExtended-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }) {
  const pathname = usePathname()
  useLayoutEffect(() => {
    console.log('new')
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
  return (
    <html lang='en'>
      <body className={HelveticaNeueExtended.className}>
        <Nav />
        <div className='smooth-wrapper'>
          <div className='smooth-content'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
