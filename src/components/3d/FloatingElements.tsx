import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { Float, Sphere, Box, Torus, Octahedron } from '@react-three/drei'

export const FloatingElements = () => {
  const sphereRef = useRef<Mesh>(null)
  const boxRef = useRef<Mesh>(null)
  const torusRef = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2
      sphereRef.current.rotation.y = time * 0.3
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.4
      boxRef.current.rotation.z = time * 0.2
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.1
      torusRef.current.rotation.y = time * 0.5
    }
  })

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

      {/* Floating geometric shapes */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} position={[-3, 2, -2]} args={[0.3]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            roughness={0.1} 
            metalness={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Box ref={boxRef} position={[3, -2, -1]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            roughness={0.2} 
            metalness={0.7}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.3}>
        <Torus ref={torusRef} position={[0, 3, -3]} args={[0.4, 0.1, 16, 32]}>
        <meshStandardMaterial 
          color="#f59e0b" 
          roughness={0.3} 
          metalness={0.6}
          emissive="#f59e0b"
          emissiveIntensity={0.1}
        />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Octahedron position={[-2, -3, 0]} args={[0.4]}>
          <meshStandardMaterial 
            color="#ef4444" 
            roughness={0.1} 
            metalness={0.9}
            emissive="#ef4444"
            emissiveIntensity={0.1}
          />
        </Octahedron>
      </Float>

      {/* Additional smaller elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Float 
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={Math.random() * 0.5}
          floatIntensity={Math.random() * 0.8}
        >
          <Sphere 
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 6
            ]} 
            args={[0.05 + Math.random() * 0.1]}
          >
            <meshStandardMaterial 
              color={`hsl(${Math.random() * 360}, 70%, 60%)`}
              roughness={0.4}
              metalness={0.6}
              emissive={`hsl(${Math.random() * 360}, 70%, 30%)`}
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}