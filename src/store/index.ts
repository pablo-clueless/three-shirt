import { proxy } from "valtio"

// type State = {
//   intro: boolean
//   color: string
//   isLogoTexture: boolean
//   isFullTexture: boolean
//   logoDecal: string
//   fullDecal: string
// }

const state: Record<string, any> = proxy({
  intro: true,
  color: "#000",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/traxo.png",
  fullDecal: "/traxo.png",
})

export default state
