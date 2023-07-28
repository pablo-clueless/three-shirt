import { useSnapshot } from "valtio"

import state from "store"

const Attribution = () => {
  const snap = useSnapshot(state)

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 glassmorphism p-2 rounded-md text-center !z-20">
      <p className="text-xs font-medium">
        code at
        <a href="https://github.com/pablo-clueless/three-shirt" className="font-bold ml-1 link" style={{color: snap.color}}>
          https://github.com/pablo-clueless/three-shirt
        </a>
      </p>
    </div>
  )
}

export default Attribution