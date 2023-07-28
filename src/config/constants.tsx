import { FigmaLogo, Image, Palette, Robot, Shuffle, TShirt } from "@phosphor-icons/react"

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
