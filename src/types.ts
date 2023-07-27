import { GLTF } from "three-stdlib"

export type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh
  }
  materials: {
    lambert: THREE.MeshStandardMaterial
    lambert1: THREE.MeshStandardMaterial
  }
}
