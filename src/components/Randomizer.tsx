import { BrandImages, PatternImages } from "config/constants"
import { getRandomHexColor } from "utils"
import Button from "./Button"
import state from "store"

const Randomizer = () => {
  return (
    <div className="randomizer-container flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <p className="text-sm font-bold mb-1">Preset logos</p>
        <div className="w-full grid grid-cols-4 gap-3">
          {BrandImages.map((logo, index) => (
            <button key={index} onClick={() => state.logoDecal = logo}>
              <img src={logo} alt={logo} className="w-full aspect-[1/1] object-contain" />
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-sm font-bold mb-1">Preset patterns</p>
        <div className="w-full grid grid-cols-5 gap-2">
          {PatternImages.map((pattern, index) => (
            <button key={index} onClick={() => state.fullDecal = pattern}>
              <img src={pattern} alt={pattern} className="w-full aspect-[1/1] object-contain" />
            </button>
          ))}
        </div>
      </div>
      <Button
        title="Random Color"
        variant="filled"
        onClick={() => state.color = getRandomHexColor()}
        className="text-sm font-bold py-1 w-full"
      />
    </div>
  )
}

export default Randomizer