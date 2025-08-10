import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Box, Plane, RoundedBox } from '@react-three/drei'
import { Mesh, Group } from 'three'
import * as THREE from 'three'

interface Project3D {
  title: string
  description: string
  technologies: string[]
  position: [number, number, number]
  color: string
  status: string
}

const projects: Project3D[] = [
  {
    title: "OHW-Project",
    description: "AI & Web Integration System",
    technologies: ["Python", "AI/ML", "Web Dev"],
    position: [0, 0, 0],
    color: "#06b6d4",
    status: "Featured"
  },
  {
    title: "AI Solution System",
    description: "Automated Problem Solver",
    technologies: ["Python", "C++", "AI/ML"],
    position: [3, 1, -1],
    color: "#8b5cf6",
    status: "In Progress"
  },
  {
    title: "Development Toolkit",
    description: "Smart Dev Environment",
    technologies: ["VS Code", "Docker", "GitHub"],
    position: [-3, -1, 1],
    color: "#f59e0b",
    status: "Completed"
  }
]

export const ProjectsShowcase3D = () => {
  const groupRef = useRef<Group>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => (
        <ProjectCard3D
          key={project.title}
          project={project}
          isSelected={selectedProject === project.title}
          onSelect={setSelectedProject}
          delay={index * 0.2}
        />
      ))}
    </group>
  )
}

interface ProjectCard3DProps {
  project: Project3D
  isSelected: boolean
  onSelect: (title: string | null) => void
  delay: number
}

const ProjectCard3D = ({ project, isSelected, onSelect, delay }: ProjectCard3DProps) => {
  const cardRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (cardRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Floating animation
      cardRef.current.position.y = project.position[1] + Math.sin(time + delay) * 0.2
      
      // Rotation based on selection
      const targetRotation = isSelected ? Math.PI * 0.1 : 0
      cardRef.current.rotation.x = THREE.MathUtils.lerp(cardRef.current.rotation.x, targetRotation, 0.1)
      
      // Scale based on selection
      const targetScale = isSelected ? 1.2 : 1
      cardRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }

    if (meshRef.current && isSelected) {
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.05
    }
  })

  return (
    <group 
      ref={cardRef}
      position={project.position}
      onPointerEnter={() => onSelect(project.title)}
      onPointerLeave={() => onSelect(null)}
    >
      {/* Main card */}
      <RoundedBox
        ref={meshRef}
        args={[2, 1.5, 0.1]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial 
          color={project.color}
          emissive={project.color}
          emissiveIntensity={isSelected ? 0.3 : 0.1}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </RoundedBox>

      {/* Status indicator */}
      <Box position={[0.8, 0.6, 0.06]} args={[0.3, 0.15, 0.02]}>
        <meshStandardMaterial 
          color={project.status === "Featured" ? "#10b981" : project.status === "Completed" ? "#06b6d4" : "#f59e0b"}
          emissive={project.status === "Featured" ? "#10b981" : project.status === "Completed" ? "#06b6d4" : "#f59e0b"}
          emissiveIntensity={0.2}
        />
      </Box>

      {/* Title */}
      <Text
        position={[0, 0.4, 0.06]}
        fontSize={0.12}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
        maxWidth={1.8}
      >
        {project.title}
      </Text>

      {/* Description */}
      <Text
        position={[0, 0.1, 0.06]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
        maxWidth={1.8}
      >
        {project.description}
      </Text>

      {/* Technologies */}
      {project.technologies.map((tech, index) => (
        <Text
          key={tech}
          position={[-0.6 + index * 0.6, -0.3, 0.06]}
          fontSize={0.06}
          color="#06b6d4"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff"
        >
          {tech}
        </Text>
      ))}

      {/* Status text */}
      <Text
        position={[0.8, 0.6, 0.08]}
        fontSize={0.05}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
      >
        {project.status}
      </Text>

      {/* Interactive glow effect */}
      {isSelected && (
        <Plane args={[2.4, 1.9]} position={[0, 0, -0.01]}>
          <meshBasicMaterial 
            color={project.color}
            transparent
            opacity={0.1}
          />
        </Plane>
      )}
    </group>
  )
}