import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { useSnapshot } from "valtio"

import { AiPicker, Button, ColorPicker, FilePicker, Tab } from "components"
import { DecalTypes, EditorTabs, FilterTabs } from "config/constants"
import { downloadCanvasToImage, reader } from "config/helpers"
import { fadeAnimation, slideAnimation } from "config/motion"
import config from "config/config"
import { download } from "assets"
import state from "store"

const Customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
          <div className="flex items-center min-h-screen">
            <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  onClick={() => console.log(tab)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute top-5 right-5 z-10" {...fadeAnimation}>
          <Button
            title="Go Back"
            icon={<ArrowLeft />}
            variant="filled"
            onClick={() => state.intro = true}
            className="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.div>

        <motion.div className="filtertabs-container" {...slideAnimation("up")}>
          {FilterTabs.map((tab) => (
            <Tab
              key={tab.name}
              tab={tab}
              onClick={() => console.log(tab)}
              isFilter
              isActive=""
            />
          ))}
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
