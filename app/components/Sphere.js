import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import '@/app/shaders/LavaMaterial'

const Sphere = () => {
  const sphereRef = useRef()
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    sphereRef.current.material.uniforms.uTime.value = time
  })
  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <lavaMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Sphere
