import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { SplitText } from 'gsap/dist/SplitText'

export const initAnimProjectHeader = () => {
  gsap.registerPlugin(SplitText)

  const title = document.getElementById('title')
  const description = document.getElementById('description')
  const img = document.getElementById('img')

  const splitTitle = new SplitText(title, {
    type: 'chars, words, lines',
    linesClass: 'line-parent',
  })
  const splitDescription = new SplitText(description, {
    type: 'chars, words, lines',
    linesClass: 'line-parent',
  })

  gsap.from(splitTitle.words, {
    delay: 0,
    duration: 2,
    x: 10,
    y: 40,
    ease: 'power4.out',
    stagger: {
      amount: 0.25,
    },
  })
  gsap.from(splitDescription.chars, {
    delay: 0,
    duration: 2,
    x: 40,
    y: 200,
    ease: 'power4.out',
    stagger: {
      amount: 0.5,
    },
  })
  gsap.fromTo(
    img,
    {
      duration: 2,
      scale: 1.2,
    },
    {
      duration: 2,
      ease: 'power4.out',
      scale: 1,
      opacity: 1,
    }
  )
}

export const initAnimLandingHeader = (intervalMs) => {
  gsap.registerPlugin(SplitText)
  const heading = document.getElementById('split')
  const split = new SplitText(heading, {
    type: 'chars, words, lines',
    linesClass: 'line-parent',
  })
  heading.style.opacity = 1
  gsap.from(split.chars, {
    delay: 0,
    duration: 2,
    opacity: 0,
    x: 40,
    y: 200,
    ease: 'power4.out',
    stagger: {
      amount: 0.5,
    },
  })

  setTimeout(() => {
    gsap.to(split.chars, {
      delay: 0,
      duration: 1,
      opacity: 1,
      x: -40,
      y: -200,
      ease: 'power4.in',
      stagger: {
        amount: 0.5,
      },
    })
  }, intervalMs - 1500)
}

export const awaitImages = async () => {
  const images = document.images
  const promises = Array.from(images).map((img) => {
    if (img.complete) {
      return Promise.resolve()
    }
    return new Promise((resolve) => {
      img.addEventListener('load', resolve)
      img.addEventListener('error', resolve)
    })
  })

  await Promise.all(promises)
  ScrollTrigger.refresh()
}
