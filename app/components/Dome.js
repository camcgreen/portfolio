import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import '@/app/shaders/LavaMaterial'

const Dome = () => {
  const domeRef = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    domeRef.current.material.uniforms.uTime.value = time
  })
  return (
    <mesh ref={domeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <lavaMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Dome
