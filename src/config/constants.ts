import { ai, file_icon, logo_shirt, stylish_shirt, swatch } from "assets"

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: file_icon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logo_shirt,
  },
  {
    name: "stylishShirt",
    icon: stylish_shirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logo_shirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylish_shirt",
  },
};
