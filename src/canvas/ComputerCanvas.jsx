import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Html, useProgress} from "@react-three/drei"

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")

  return (
    <primitive
      object={earth.scene}
      scale={3.0}
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

const EarthCanvas = () => {
  return (
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
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
  
}

export default EarthCanvas