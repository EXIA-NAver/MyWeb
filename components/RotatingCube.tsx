'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isRotating, setIsRotating] = useState(true)
  const [lastRotationTime, setLastRotationTime] = useState(0)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const currentTime = state.clock.getElapsedTime()
    
    if (isRotating) {
      // Rotate for 90 degrees (π/2 radians)
      meshRef.current.rotation.y += delta * 0.5
      
      // Check if we've completed a 90-degree rotation
      if (meshRef.current.rotation.y >= Math.PI / 2) {
        meshRef.current.rotation.y = Math.PI / 2
        setIsRotating(false)
        setLastRotationTime(currentTime)
      }
    } else {
      // Wait for 1 second before starting next rotation
      if (currentTime - lastRotationTime >= 1) {
        setIsRotating(true)
        // Reset rotation to 0 to start next 90-degree rotation
        meshRef.current.rotation.y = 0
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material-0" color="#ff0000" /> {/* Front - Frontend */}
      <meshStandardMaterial attach="material-1" color="#00ff00" /> {/* Back - Backend */}
      <meshStandardMaterial attach="material-2" color="#0000ff" /> {/* Top - Cloud */}
      <meshStandardMaterial attach="material-3" color="#ffff00" /> {/* Bottom - DevOps */}
      <meshStandardMaterial attach="material-4" color="#ff00ff" /> {/* Right - Database */}
      <meshStandardMaterial attach="material-5" color="#00ffff" /> {/* Left - AI/ML */}
    </mesh>
  )
}

export default function RotatingCube() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
} 