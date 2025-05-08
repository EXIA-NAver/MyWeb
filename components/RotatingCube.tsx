'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Edges } from '@react-three/drei'
import * as THREE from 'three'

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [textures, setTextures] = useState<THREE.Texture[]>([])

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    const loadTextures = async () => {
      const textureUrls = [
        '/textures/python-logo.png',
        '/textures/nextjs-logo.png',
        '/textures/mongodb-log.png',
        '/textures/java-logo.png',
        '/textures/kotlin-logo.png',
        '/textures/spring-cloud-log.png'
      ]

      const loadedTextures = await Promise.all(
        textureUrls.map(url => 
          new Promise<THREE.Texture>((resolve) => {
            textureLoader.load(url, (texture) => {
              texture.needsUpdate = true
              texture.colorSpace = THREE.SRGBColorSpace
              resolve(texture)
            })
          })
        )
      )

      setTextures(loadedTextures)
    }

    loadTextures()
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    // Continuous rotation
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
          color="#ffffff"
          transparent={true}
          opacity={1}
          metalness={0.1}
          roughness={0.2}
          side={THREE.FrontSide}
          depthWrite={true}
        />
      ))}
      <Edges
        scale={1.01}
        threshold={15}
        color="black"
      />
    </mesh>
  )
}

export default function RotatingCube() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
} 