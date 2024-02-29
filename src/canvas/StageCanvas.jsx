import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei"


const Stage = ({...props}) => {
  const {nodes,materials} = useGLTF("./stage/neon_stage.glb");
  return (
    <>

    <group {...props} dispose={null}
        rotation={[-0.15, -0.585, -0.1]}
        position={[-0.3, -1.2, 0]}
        >
        
      <group scale={0.009}>
        <group
          position={[-317.69, 369.58, -669.11]}
          rotation={[-1.56, 0.23, -1.79]}
          scale={[32.65, 30.71, 78.17]}
        >
          <mesh
            geometry={nodes.Cylinder067_Material002_0.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.Cylinder067_Material002_0_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          geometry={nodes.Torus_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[80.45, 226.19, -574.02]}
          scale={174.62}
        />
      </group>
    </group>
    </>
  );
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

  const StageCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[1]'>
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
          position={[-30,30,-30]}
          intensity={3}
        />

        <ambientLight
        intensity={1}
        
        />

        <hemisphereLight
        skyColor="#b1e1ff"
        groundColor="#000000"
        intensity={1}
        />

        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stage/>
      </Suspense>
    </Canvas>
    </div>
  )
  
}


export default StageCanvas;