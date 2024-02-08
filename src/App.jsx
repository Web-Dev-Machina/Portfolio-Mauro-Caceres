import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"

function App() {

  return (
    <>
      <div className="relative z-0">
        <StarCanvas/>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
