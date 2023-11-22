import gsap from 'gsap'
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
  gsap.from(img, {
    duration: 2,
    scaleX: 1.2,
    scaleY: 1.2,
    opacity: 0,
    ease: 'power4.out',
  })
}
