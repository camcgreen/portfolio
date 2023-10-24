import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { images } from '@/app/utils/assets'
import { handleCardShuffling, calculateProjectIndex } from '@/app/utils/helpers'
import { EASING_SPEED, DELTA_FACTOR, LOCK_DELAY_MS } from '@/app/utils/macros'

export default function FluidList({ Item }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(1)
  const group = useRef()
  const targetYRef = useRef(0)
  let scrollLevel = 0
  let oldScrollLevel = 0
  let scrollEndTimeout
  let shuffleEnabled = true
  let smoothedDeltaY = 0
  let targetDeltaY = 0
  let scrollingUp

  const cards = useRef(
    images.map((image, i) => {
      return {
        url: image,
        y: 2 - 2 * i,
        ref: useRef(),
      }
    })
  )

  useEffect(() => {
    const handleWheel = (event) => {
      targetDeltaY = event.deltaY * DELTA_FACTOR
      scrollingUp = event.deltaY < 0

      if (group) {
        const targetY = targetYRef.current + event.deltaY / 500
        targetYRef.current = targetY

        clearTimeout(scrollEndTimeout)

        scrollEndTimeout = setTimeout(() => {
          const closestFactorOfTwo = Math.round(targetYRef.current / 2) * 2
          // console.log("locking onto position", closestFactorOfTwo)
          targetYRef.current = closestFactorOfTwo
        }, LOCK_DELAY_MS)
      }
    }

    let startY = 0 // Store the starting touch Y position

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        // Get the Y position of the touch event
        startY = event.touches[0].pageY
      }
    }

    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        // Calculate the difference in Y position from start to current position
        // Need to sort this bit out as deltaY doesn't go back to 0
        // which makes the curve distortion persist after finishing scroll
        const deltaY = startY - event.touches[0].pageY
        targetDeltaY = deltaY * DELTA_FACTOR
        scrollingUp = deltaY < 0

        if (group) {
          const targetY = targetYRef.current + deltaY / 50
          targetYRef.current = targetY

          clearTimeout(scrollEndTimeout)

          scrollEndTimeout = setTimeout(() => {
            const closestFactorOfTwo = Math.round(targetYRef.current / 2) * 2
            targetYRef.current = closestFactorOfTwo
          }, LOCK_DELAY_MS)
        }

        // Reset startY for continuous scrolling
        startY = event.touches[0].pageY
      }
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      clearTimeout(scrollEndTimeout)
    }
  }, [])

  useFrame((dt) => {
    const newPos = -(2 * (cards.current.length - 1) + scrollLevel * 2)
    const upperBoundary = -2 + scrollLevel * 2
    const lowerBoundary = cards.current.length - 1 + scrollLevel * 2
    const boundaryOffset = 1.5

    if (scrollLevel !== oldScrollLevel) {
      shuffleEnabled = true
      oldScrollLevel = scrollLevel
    }

    if (shuffleEnabled) {
      if (scrollingUp) {
        if (group.current.position.y <= upperBoundary + boundaryOffset) {
          // console.log("shift last card to start")
          shuffleEnabled = false
          const lastCard = cards.current.pop()
          lastCard.y = 4 - scrollLevel * 2
          lastCard.ref.current.position.y = lastCard.y
          cards.current.unshift(lastCard)
          scrollLevel--
          const projectIndex = calculateProjectIndex(
            scrollLevel,
            cards.current.length
          )
        }
      } else {
        if (group.current.position.y >= lowerBoundary - boundaryOffset) {
          // console.log("shift first card to end")
          shuffleEnabled = false
          const firstCard = cards.current.shift()
          firstCard.y = newPos
          firstCard.ref.current.position.y = firstCard.y
          cards.current.push(firstCard)
          scrollLevel++
          const projectIndex = calculateProjectIndex(
            scrollLevel,
            cards.current.length
          )
        }
      }
    }

    smoothedDeltaY = THREE.MathUtils.lerp(
      smoothedDeltaY,
      targetDeltaY,
      EASING_SPEED
    )
    const offsetX = smoothedDeltaY / 4000
    const offsetY = smoothedDeltaY / 500
    cards.current.forEach((card) => {
      card.ref.current.material.uOffset = new THREE.Vector2(offsetX, offsetY)
    })

    group.current.scale.x = THREE.MathUtils.lerp(
      group.current.scale.x,
      1 + targetDeltaY / 1000,
      EASING_SPEED
    )
    group.current.scale.y = THREE.MathUtils.lerp(
      group.current.scale.y,
      1 - targetDeltaY / 5000,
      EASING_SPEED
    )
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetYRef.current,
      EASING_SPEED
    )
  })
  return (
    <group ref={group} position={[0, 0, 0]}>
      {cards.current.map((card, i) => {
        return (
          <Item
            key={i}
            ref={card.ref}
            groupRef={group}
            position={[0, card.y, 0]}
            textureUrl={card.url}
          />
        )
      })}
    </group>
  )
}
