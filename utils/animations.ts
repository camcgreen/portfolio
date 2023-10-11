import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const animateSplitText = (
  animateElement: string,
  triggerElement: string
) => {
  const animate = document.querySelector(animateElement)
  const split = new SplitText(animate, {
    type: 'lines',
    linesClass: 'line-parent',
  })
  gsap.from(split.lines, {
    delay: 0,
    duration: 2,
    y: 80,
    ease: 'power4.out',
    stagger: {
      amount: 0.2,
    },
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top bottom', // when the top of the trigger hits the bottom of the screen (basically when it first comes onto the screen)
      toggleActions: 'restart none none reverse',
    },
  })
}
