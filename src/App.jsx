import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Switch from "./components/Switch.jsx"
import Work from "./components/Work.jsx"

function App() {

  return <>
  <Switch/>
      <div className="relative z-0">
        
        <StarCanvas/>
        <Navbar/>
        <Hero/>
      </div>
      <Work/>
      
    </>
}

export default App
