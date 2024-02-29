import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei"

const Planet = () => {
  const planet = useGLTF("./planet/planet.glb")

  return (
    <primitive
      object={planet.scene}
      scale={3}
      position-y={0}
      rotation-y={0}
    />
  )
}

const CanvasLoader = () => {
  const {progress} = useProgress()
  return (
    <Html>
      <span></span>
      <p style={{fontSize:14, color:"#f1f1f1", fontWeight:800, marginTop:40}}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

const PlanetCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>

      <directionalLight
          position={[1,1,1]}
          intensity={2}
        />

        <ambientLight
        intensity={30}
        
        />

        <hemisphereLight
        skyColor="#b1e1ff"
        groundColor="#000000"
        intensity={1}
        />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet/>
      </Suspense>
    </Canvas>
    </div>
  )
  
}

export default PlanetCanvas;