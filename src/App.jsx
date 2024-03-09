import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"

function App() {

  return <>

    {/*StarCanvas box*/}
    <div className="relative z-0">        
      <StarCanvas/>
      <Hero/>
    </div>
    <Projects/>
    <div className="mx-auto relative max-w-screen-xl z-0">
    <img className="hue-rotate-30 absolute inset-0 z-[-1] lg:p-10" src="planet.webp" alt="planet"/>
      <Experience/>
      </div>

    <div className="relative z-0">
      {/*hay que jugar con object-cover y h-[1000px] para adaptarlo bien a responsive*/}
       <img className="object-cover h-[750px] hue-rotate-30 absolute inset-0 z-[-1]" src="footer.webp" alt="footer"/>
      <Contact/>
    </div>
    
    <Navbar/>
    </>
}

export default App
