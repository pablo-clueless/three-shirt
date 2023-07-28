import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import { useState } from "react"

import { AiPicker, Button, ColorPicker, FilePicker, Randomizer, Tab } from "components"
import { DecalTypes, EditorTabs, FilterTabs } from "config/constants"
import { downloadCanvasToImage, reader } from "config/helpers"
import { fadeAnimation, slideAnimation } from "config/motion"
import { generateImage } from "services/dall-e"
import state from "store"

const Customizer = () => {
  const [activeFilter, setActiveFilter] = useState<Record<string, boolean>>({logoShirt: true, stylishShirt: false})
  const [activeEditor, setActiveEditor] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const snap = useSnapshot(state)

  const generateTabContent = () => {
    switch (activeEditor) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />
      case "aipicker":
        return <AiPicker
          handleSubmit={handleSubmit}
          loading={loading}
          prompt={prompt}
          setPrompt={setPrompt}
        />
      case "randomizer":
        return <Randomizer />
      default:
        return null
    }
  }

  const handleSubmit = async(type: string) => {
    if (!prompt) return alert("please enter a prompt")
    try {
      setLoading(true)
      const image = await generateImage(prompt)
      handleDecals(type, `data:image/png;base64,${image}`)
      setPrompt("")
    } catch(error) {
      alert(error)
    } finally {
      setLoading(false)
      setActiveEditor("")
    }
  }

  const handleDecals = (type: string, result: any) => {
    const decalType = DecalTypes[type]
    state[decalType.stateProperty] = result
    if (!activeFilter[decalType.filterTab]) {
      handleActiveFilter(decalType.filterTab)
    }
  }

  const handleActiveFilter = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilter[tabName]
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilter[tabName]
        break;
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
      break;
    }

    setActiveFilter(prev => {
      return {
        ...prev,
        [tabName]: !prev[tabName]
      }
    })
  }

  const readFile = (type: string) => {
    if (!file) return
    reader(file).then((result) => {
      handleDecals(type, result)
      setActiveEditor("")
    })
  }
  
  const toggleActiveEditor = (name: string) => {
    if (activeEditor === name) {
      setActiveEditor("")
    } else {
      setActiveEditor(name)
    }
  }

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
                  onClick={() => toggleActiveEditor(tab.name)}
                />
              ))}
              {generateTabContent()}
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
              onClick={() => handleActiveFilter(tab.name)}
              isFilter
              isActive={tab.name}
            />
          ))}
          <button onClick={downloadCanvasToImage} className="download-btn">
            <DownloadSimple className="text-3xl" />
          </button>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
