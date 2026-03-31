"use client"

import * as THREE from "three"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { EffectComposer, N8AO } from "@react-three/postprocessing"
import {
  BallCollider,
  Physics,
  RigidBody,
  RapierRigidBody
} from "@react-three/rapier"

const loader = new THREE.TextureLoader()

const images = [
  "/tech/react.png",
  "/tech/node.png",
  "/tech/mongodb.png",
  "/tech/typescript.png",
  "/tech/javascript.png",
  "/tech/swift.png",
  "/tech/python.png",
  "/tech/git.png",
  "/tech/mysql.png",
  "/tech/firebase.png"
]

// const textures = images.map((i)=>loader.load(i))

const geometry = new THREE.SphereGeometry(1,32,32)

const spheres = [...Array(25)].map(() => ({
  scale: THREE.MathUtils.randFloat(0.4, 0.9)
}))

function Sphere({scale,material}:any){

  const ref = useRef<RapierRigidBody>(null)
  const vec = new THREE.Vector3()

  useFrame((state, delta) => {

    if (!ref.current) return // ✅ CRASH FIX
  
    delta = Math.min(0.1, delta)
  
    const impulse = vec
      .copy(ref.current.translation())
      .normalize()
      .multiplyScalar(-60 * delta * scale)
  
    ref.current.applyImpulse(impulse, true)
  
  })

  return(

    <RigidBody
      ref={ref}
      colliders={false}
      position={[
        THREE.MathUtils.randFloatSpread(15),
        THREE.MathUtils.randFloatSpread(15),
        THREE.MathUtils.randFloatSpread(10)
      ]}
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.1}
    >

      <BallCollider args={[scale]}/>

      <mesh
        geometry={geometry}
        material={material}
        scale={scale}
      />

    </RigidBody>

  )

}

function Pointer(){

  const ref = useRef<RapierRigidBody>(null)
  const vec = new THREE.Vector3()

  useFrame(({pointer,viewport})=>{

    vec.set(
      (pointer.x*viewport.width)/2,
      (pointer.y*viewport.height)/2,
      0
    )

    ref.current?.setNextKinematicTranslation(vec)

  })

  return(

    <RigidBody
      ref={ref}
      type="kinematicPosition"
      colliders={false}
    >

      <BallCollider args={[2]}/>

    </RigidBody>

  )

}

export default function TechStack(){

  const materials = useMemo(() => {

    const loader = new THREE.TextureLoader()
  
    const textures = images.map((i) => {
      const tex = loader.load(i)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = 4
      return tex
    })
  
    return textures.map((texture) =>
      new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.3,
        metalness: 0.5,
        roughness: 1,
        clearcoat: 0.1
      })
    )
  
  }, [])
  return(

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Title */}
  <h2 className="absolute top-32 text-6xl font-bold z-10">
    MY TECHSTACK
  </h2>

  {/* 3D Canvas */}
  <div className="absolute inset-0">
  <Canvas
  camera={{ position: [0, 0, 12], fov: 40 }}
  gl={{ alpha: true }}
  onCreated={({ gl }) => {
    gl.setClearColor(0x000000, 0) // transparent but base is black
  }}
>


      <ambientLight intensity={1} />

      <spotLight
        position={[20, 20, 25]}
        angle={0.2}
        penumbra={1}
      />

      <Physics gravity={[0, 0, 0]}>
        <Pointer />

        {spheres.map((s, i) => (
          <Sphere
            key={i}
            scale={s.scale}
            material={
              materials[
                Math.floor(Math.random() * materials.length)
              ]
            }
          />
        ))}

      </Physics>

      <Environment preset="city" />

      <EffectComposer>
        <N8AO aoRadius={2} intensity={1.2} color="#0f002c" />
      </EffectComposer>

    </Canvas>
  </div>

</section>
  )

}