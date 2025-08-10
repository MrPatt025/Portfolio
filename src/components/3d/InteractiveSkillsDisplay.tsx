import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box, Sphere } from '@react-three/drei'
import { Mesh, Group } from 'three'
import * as THREE from 'three'

interface SkillNode {
  name: string
  level: number
  position: [number, number, number]
  color: string
}

const skills: SkillNode[] = [
  { name: "Python", level: 95, position: [0, 0, 0], color: "#3776ab" },
  { name: "AI/ML", level: 80, position: [2, 1, -1], color: "#ff6b6b" },
  { name: "React", level: 85, position: [-2, 0.5, 0.5], color: "#61dafb" },
  { name: "C++", level: 85, position: [1, -1.5, 1], color: "#00599c" },
  { name: "Docker", level: 75, position: [-1.5, 1.8, -0.5], color: "#2496ed" },
  { name: "GitHub", level: 90, position: [2.5, -0.8, 0.2], color: "#f1502f" },
  { name: "VS Code", level: 90, position: [-2.2, -1.2, 1.2], color: "#007acc" },
  { name: "Node.js", level: 78, position: [0.8, 2.2, -1.5], color: "#8cc84b" }
]

export const InteractiveSkillsDisplay = () => {
  const groupRef = useRef<Group>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <Sphere position={[0, 0, 0]} args={[0.3]}>
        <meshStandardMaterial 
          color="#4f46e5" 
          emissive="#4f46e5"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Skill nodes */}
      {skills.map((skill, index) => (
        <SkillNode 
          key={skill.name}
          skill={skill}
          isHovered={hoveredSkill === skill.name}
          onHover={setHoveredSkill}
        />
      ))}

      {/* Connection lines */}
      {skills.map((skill, index) => (
        <Connection 
          key={`connection-${index}`}
          from={[0, 0, 0]}
          to={skill.position}
          color={skill.color}
        />
      ))}
    </group>
  )
}

interface SkillNodeProps {
  skill: SkillNode
  isHovered: boolean
  onHover: (skill: string | null) => void
}

const SkillNode = ({ skill, isHovered, onHover }: SkillNodeProps) => {
  const meshRef = useRef<Mesh>(null)
  const scale = skill.level / 100

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isHovered ? scale * 1.5 : scale
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
      
      if (isHovered) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 2
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 1.5
      }
    }
  })

  return (
    <group position={skill.position}>
      <Box
        ref={meshRef}
        args={[0.4, 0.4, 0.4]}
        onPointerEnter={() => onHover(skill.name)}
        onPointerLeave={() => onHover(null)}
      >
        <meshStandardMaterial 
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
          roughness={0.2}
          metalness={0.7}
        />
      </Box>
      
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        {skill.name}
      </Text>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.1}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        {skill.level}%
      </Text>
    </group>
  )
}

interface ConnectionProps {
  from: [number, number, number]
  to: [number, number, number]
  color: string
}

const Connection = ({ from, to, color }: ConnectionProps) => {
  const lineRef = useRef<THREE.BufferGeometry>(null)

  return (
    <line>
      <bufferGeometry ref={lineRef}>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...from, ...to])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} opacity={0.4} transparent />
    </line>
  )
}