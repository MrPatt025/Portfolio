import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

interface Scene3DProps {
  children: React.ReactNode
  camera?: {
    position?: [number, number, number]
    fov?: number
  }
  className?: string
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-full bg-background/50 rounded-lg border">
      <div className="text-center p-6">
        <h3 className="text-lg font-semibold text-destructive mb-2">3D Scene Error</h3>
        <p className="text-sm text-muted-foreground">
          Failed to load 3D content. Please refresh the page.
        </p>
      </div>
    </div>
  )
}

export const Scene3D = ({ 
  children, 
  camera = { position: [0, 0, 5], fov: 75 },
  className = "w-full h-full"
}: Scene3DProps) => {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}