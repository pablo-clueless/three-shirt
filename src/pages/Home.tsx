import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight } from "@phosphor-icons/react"
import { useSnapshot } from "valtio"

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "config/motion"
import { Button } from "components"
import state from "store"

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./oO.png" alt="" className="w-10 h-10 object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text uppercase">
                create <br className="hidden xl:block" /> style.
              </h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md text-gray-600">
                Create your unique shirt with a Threejs 3D customization tool.
                <strong> Unleash your imagination</strong>{" "}
                and define your style.
              </p>
              <Button
                title="Customize"
                icon={<ArrowRight />}
                variant="filled"
                onClick={() => state.intro = false}
                className="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
