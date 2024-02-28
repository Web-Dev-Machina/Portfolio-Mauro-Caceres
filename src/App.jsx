import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Switch from "./components/Switch.jsx"
import Work from "./components/Work.jsx"
import Profile from "./components/Profile.jsx"
import PlanetCanvas from "./canvas/PlanetCanvas.jsx"

function App() {

  return <>
  <Switch/>
    {/*StarCanvas box*/}
    <div className="relative z-0">        
      <StarCanvas/>
      <Hero/>
    </div>
    <Work/>
    <div className="relative z-0">
    <PlanetCanvas/>
    <Profile/>
    </div>

    <Navbar/>
    </>
}

export default App
