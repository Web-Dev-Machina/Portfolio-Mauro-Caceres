import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Switch from "./components/Switch.jsx"


function App() {

  return <>
      <div className="relative z-0">
        <Switch/>
        <StarCanvas/>
        <Navbar/>
        <Hero/>
      </div>

    </>
}

export default App
