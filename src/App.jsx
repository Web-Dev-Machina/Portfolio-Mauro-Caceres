import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Switch from "./components/Switch.jsx"
import Work from "./components/Work.jsx"
import Profile from "./components/Profile.jsx"
import PlanetCanvas from "./canvas/PlanetCanvas.jsx"
import StageCanvas from "./canvas/StageCanvas.jsx"

function App() {

  return <>

    {/*StarCanvas box*/}
    <div className="relative z-0">        
      <StarCanvas/>
      <Hero/>
    </div>
    <Work/>
    <div className="mx-auto max-w-screen-xl relative z-0">
      <img className="h-auto absolute inset-0 z-[-1]" src="planet.webp" alt="footer"/>
      <Profile/>
    </div>
    <div className="relative z-0">
       <img className="w-full h-auto absolute inset-0 z-[-1]" src="footer.webp" alt="footer"/>
      <Work/>
    </div>
    <Navbar/>
    </>
}

export default App
