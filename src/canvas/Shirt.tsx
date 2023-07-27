import { Decal, useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useSnapshot } from "valtio"
import { easing } from "maath"

import { GLTFResult } from "types"
import state from "store"

const Shirt = () => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("./shirt_baked.glb") as GLTFResult

  useFrame((_state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  })

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  const stateString = JSON.stringify(snap)

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt
useGLTF.preload("./shirt_baked.glb")