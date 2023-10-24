import React, { useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'
import { EASING_SPEED } from '@/app/utils/macros'

export default function Rig() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => {
    const mouseX = (mouse.x * 2) / 40
    const mouseY = (mouse.y * 2) / 40
    camera.position.lerp(vec.set(mouseX, mouseY, 2), EASING_SPEED)
  })
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.2}
      pitchFrequency={0.2}
      rollFrequency={0.2}
    />
  )
}
