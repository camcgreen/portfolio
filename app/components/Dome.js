import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import '@/app/shaders/LavaMaterial'

const Dome = () => {
  const domeRef = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime() / 2
    domeRef.current.material.uniforms.uTime.value = time
  })
  return (
    <mesh ref={domeRef}>
      <sphereGeometry
        args={[1.5, 32, 32]}
        scale={[-1, 1, 1]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <lavaMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Dome
