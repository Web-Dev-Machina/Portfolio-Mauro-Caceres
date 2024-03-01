import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Work from "./components/Work.jsx"
import Profile from "./components/Profile.jsx"

function App() {

  return <>

    {/*StarCanvas box*/}
    <div className="relative z-0">        
      <StarCanvas/>
      <Hero/>
    </div>
    <Work/>
    <div className="mx-auto max-w-screen-xl relative z-0">
      <img className="hue-rotate-30 h-auto absolute inset-0 z-[-1]" src="planet.webp" alt="planet"/>
      <Profile/>
    </div>
    <div className="relative z-0">
       <img className="hue-rotate-30 w-full h-auto absolute inset-0 z-[-1]" src="footer.webp" alt="footer"/>
      <Work/>
    </div>
    <Navbar/>
    </>
}

export default App
