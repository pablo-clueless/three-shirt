import { FigmaLogo, GithubLogo, GlobeSimple, Image, LinkedinLogo, Palette, Robot, Shuffle, TShirt, TwitterLogo } from "@phosphor-icons/react"

import { andela, communitypro, facebook, figma, google, patter_1, patter_2, patter_3, patter_4, patter_5, react, threejs, twitter } from "assets"

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: <Palette />,
  },
  {
    name: "filepicker",
    icon: <Image />,
  },
  {
    name: "aipicker",
    icon:<Robot />,
  },
  {
    name: "randomizer",
    icon:<Shuffle />,
  },
]

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: <FigmaLogo />,
  },
  {
    name: "stylishShirt",
    icon: <TShirt />,
  },
]

export const DecalTypes: Record<string, {stateProperty: string, filterTab: string}> = {
  "logo": {
    stateProperty: "logoDecal",
    filterTab: "logo_shirt",
  },
  "full": {
    stateProperty: "fullDecal",
    filterTab: "stylish_shirt",
  },
}

export const BrandImages = [
  andela,
  communitypro,
  facebook,
  figma,
  google,
  react,
  threejs,
  twitter,
]

export const PatternImages = [
  patter_1,
  patter_2,
  patter_3,
  patter_4,
  patter_5,
]

export const Links = [
  {icon: <GlobeSimple />, url: "https://okunolasamson.vercel.app"},
  {icon: <GithubLogo />, url: "https://github.com/pablo-clueless"},
  {icon: <TwitterLogo />, url: "https://twitter.com/pablo_clueless"},
  {icon: <LinkedinLogo />, url: "https://linkedin.com/in/samson-okunola"},
]
