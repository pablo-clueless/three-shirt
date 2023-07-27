
import { Customizer, Home } from "pages"
import Canvas from "canvas"

const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App