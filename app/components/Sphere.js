import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import '@/app/shaders/LavaMiniMaterial'

const Sphere = () => {
  const { scene, gl } = useThree()
  const sphereRef = useRef()
  const cubeRenderTarget = useRef(
    new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
      encoding: THREE.sRGBEncoding,
    })
  )
  const cubeCamera = useRef(
    new THREE.CubeCamera(0.1, 10, cubeRenderTarget.current)
  )

  useFrame((state) => {
    // Hide the sphere before rendering to the cube camera to avoid self-capture
    sphereRef.current.visible = false

    // Update the cube camera
    cubeCamera.current.update(gl, scene)

    // Make the sphere visible again
    sphereRef.current.visible = true

    const time = state.clock.getElapsedTime()
    sphereRef.current.material.uniforms.uTime.value = time
    sphereRef.current.material.uniforms.tCube.value =
      cubeRenderTarget.current.texture
  })

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <lavaMiniMaterial side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Sphere
