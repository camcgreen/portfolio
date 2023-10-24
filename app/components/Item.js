import React, { useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { remap } from '@/app/utils/helpers'
import '@/app/shaders/MaskingMaterial'

const Item = ({ groupRef, textureUrl, ...props }, ref) => {
  const texture = useTexture(textureUrl)
  const width = 3
  const height = 2
  const [viewportHeight, setViewportHeight] = useState(1.0)

  const offset = new THREE.Vector2(0.0, 0.0)

  useFrame(() => {
    const distanceFromCenter = Math.abs(
      groupRef.current.position.y + ref.current.position.y
    )
    let normalizedDistance = remap(distanceFromCenter, 0, 2.5, 0, 1)
    setViewportHeight(1.0 - normalizedDistance)
  })

  return (
    <mesh ref={ref} {...props}>
      <planeGeometry args={[width, height, 32, 32]} />
      <maskingMaterial
        tex={texture}
        viewportHeight={viewportHeight}
        scale={[width, height]}
        imageBounds={[texture.image.width, texture.image.height]}
        uOffset={offset}
        transparent
      />
      {/* <meshBasicMaterial /> */}
    </mesh>
  )
}

export default React.forwardRef(Item)
