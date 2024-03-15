import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import StarCanvas from "./canvas/StarCanvas.jsx"
import Projects from "./components/Projects.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
import { useInView } from 'react-intersection-observer';

function App() {

  /*Intersection Observer*/
  const { ref:refHero, inView:inViewHero} = useInView({threshold: 0.55,});
  const { ref:refProjects, inView:inViewProjects} = useInView({threshold: 0.3,});
  const { ref:refExperience, inView:inViewExperience} = useInView({threshold: 0.44,});
  const { ref:refContact, inView:inViewContact} = useInView({threshold: 0.44,});

  /*Nav clickHandler*/
  const clickHandler = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  }

  return <>

    {/*StarCanvas box*/}
    <div id="hero" ref={refHero} className="relative z-0">        
      <StarCanvas/>
      <Hero  inView={inViewHero}/>
    </div>

    <div id="projects" ref={refProjects}>
      <Projects inView={inViewProjects}/>
    </div>

    <div id="experience" ref={refExperience} className="mx-auto relative max-w-screen-xl z-0">
      <img className="hue-rotate-30 absolute inset-0 z-[-1] lg:p-10" src="planet.webp" alt="planet"/>
      <Experience inView={inViewExperience}/>
    </div>

    <div id="contact" ref={refContact} className="relative z-0">
      <img className="object-cover h-[750px] hue-rotate-30 absolute inset-0 z-[-1]" src="footer.webp" alt="footer"/>
      <Contact inView={inViewContact}/>
    </div>

    <Navbar clickHandler={{clickHandler}} inView={[inViewHero, inViewProjects, inViewExperience, inViewContact]}/>

  </>
}

export default App;
