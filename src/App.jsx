import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Switch from "./components/Switch.jsx"
import Work from "./components/Work.jsx"
import Profile from "./components/Profile.jsx"

function App() {

  return <>
  <Switch/>
    {/*StarCanvas box*/}
    <div className="relative z-0">        
      <StarCanvas/>
      <Hero/>
    </div>
    <Work/>
    <Profile/>

    <Navbar/>
    </>
}

export default App
