import { Customizer, Home } from "pages"
import { Attribution } from "components"
import Canvas from "canvas"

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Attribution />
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App