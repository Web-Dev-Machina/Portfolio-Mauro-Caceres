const Projects = () => {
  return <>
    <section className="relative px-4 pt-10 pb-20 sm:pb-44">
      <div className="pt-10 pb-20 sm:pb-32 flex flex-col max-w-screen-xl mx-auto items-center sm:items-start">
        <h2 className="mx-auto md:mx-0 font-poppins font-semibold text-[30px] sm:text-[40px] md:text-[33px] lg:text-[40px] xl:text-[50px] text-white leading-[75px] lg:leading-[100px]">
          Mis <span className="text-red-500 red-glow">Proyectos</span>
        </h2>
        <p className="mx-auto md:mx-0 text-white font-light text-lg leading-6 max-w-[470px] md:max-w-[550px] text-center md:text-left">
          En 2021 estudié Desarrollo Web en Coderhouse. Hoy en día sigo perfeccionando el uso de herramientas mediante estos proyectos.
        </p>
      </div>
      
      {/* Responsive */}
      <div className="hidden sm:flex xl:hidden flex-col justify-between gap-y-12 items-center max-w-screen-xl mx-auto">

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card1.webp')"}}>
            <div className="button-child gap-12 hidden">
              <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/Web-ExMachina/Portfolio-Three.js-2"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
              <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://3d-website-react.netlify.app"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-4 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">3D Website Portfolio</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Sitio Web donde la página principal es una escena 3D interactiva y esta compuesta de cuatro puntos de interés. El formulario de Contacto posee un objeto 3D que responde a los inputs del usuario.</p>
            </div>
            <div className="flex">
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#threejs</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
            </div>
          </div>
        </div>

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center gap-12 h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card2.webp')"}}>
            <div className="button-child gap-12 hidden">
              <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/Web-ExMachina/CV-Caceres-Mauro"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
              <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://maurocaceres.netlify.app"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-3 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">Portfolio Personal</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Sitio de diseño OnePage con fondo 3D mediante Three.js y react-three/fiber. El formulario está echo con EmailjS y Sonner para la notificación de envío</p>
            </div>
            <div className="flex gap-x-1.5">
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#threejs</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
            </div>
          </div>
        </div>

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center gap-12 h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card3.webp')"}}>
            <div className="button-child gap-12 hidden">
              <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/FGA-Consultora/FGA"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
              <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://www.fgaconsultora.com.ar/"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-5 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">Landing Page</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Sitio Web con Carrusel de imágenes hecho en Flowbite. Está compuesto por 9 páginas con diferentes servicios y el formulario de Contacto está hecho con SmtpJS y reCAPTCHA v2.</p>
            </div>
            <div className="flex gap-x-1">
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-2 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-2 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
              <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-2 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#flowbite</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Desktop */}
      <div className="flex sm:hidden xl:flex flex-col xl:flex-row justify-between gap-y-12 items-center max-w-screen-xl mx-auto">

        <div className="bg-black/10 max-w-sm rounded overflow-hidden shadow-lg card-glow">
          <div className="relative">

            <div className="flex justify-center gap-x-10 items-center py-14">
              <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/Web-ExMachina/Portfolio-Three.js-2"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
              <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://3d-website-react.netlify.app"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
            </div>

            <img className="absolute top-0 img-child" src="card1.webp" alt="Portfolio-3D"/>
          </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">3D Website Portfolio</div>
          <p className="text-gray-400 font-light text-lg leading-6">
          Sitio Web donde la página principal es una escena 3D interactiva y esta compuesta de cuatro puntos de interés. El formulario de Contacto posee un objeto 3D que responde a los inputs del usuario.
          </p>
        </div>
        <div className="justify-center sm:justify-start px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#threejs</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
        </div>
      </div>
          

      <div className="bg-black/10 max-w-sm rounded overflow-hidden shadow-lg card-glow">
      <div className="relative">

        <div className="flex justify-center gap-x-10 items-center py-14">
          <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/Web-ExMachina/CV-Caceres-Mauro"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
          <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://maurocaceres.netlify.app"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
        </div>

        <img className="absolute top-0 img-child" src="card2.webp" alt="Personal Portfolio"/>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Personal Portfolio</div>
          <p className="text-gray-400 font-light text-lg leading-6">
          Sitio de diseño OnePage con fondo 3D mediante Three.js y react-three/fiber. El formulario está echo con EmailjS y Sonner para notificar el envío por medio de un toast. <br/><br/>
          </p>
        </div>
        <div className="justify-center sm:justify-start px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#threejs</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
        </div>
      </div>

      <div className="bg-black/10 max-w-sm rounded overflow-hidden shadow-lg card-glow">
        <div className="relative">

          <div className="flex justify-center gap-x-10 items-center py-14">
            <a aria-label="Go to Github repository" target="_blank" rel="noopener noreferrer" href="https://github.com/FGA-Consultora/FGA"><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
            <a aria-label="Go to Website" target="_blank" rel="noopener noreferrer" href="https://www.fgaconsultora.com.ar/"><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></a>
          </div>

          <img className="absolute top-0 img-child" src="card3.webp" alt="FGA Consulting"/>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">Landing Page</div>
          <p className="text-gray-400 font-light text-lg leading-6">
            Sitio Web con Carrusel de imágenes hecho en Flowbite. Está compuesto por 9 páginas con diferentes servicios y el formulario de Contacto está hecho con SmtpJS y reCAPTCHA v2.<br/> <br/>
          </p>
        </div>
        <div className="justify-center sm:justify-start px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#tailwind</span>
          <span className="inline-block hover:text-red-500 bg-purple-950/30 rounded-full px-3 py-1 text-sm font-medium text-purple-300 mr-2 mb-2">#flowbite</span>
        </div>
      </div>
    </div>
    {/*Background Blur spots*/}
    <div className="rounded-full bg-purple-600 absolute w-72 h-72 blur-[250px] left-0 top-72 z-[-10]"/>
    <div className="rounded-full bg-red-600 absolute w-60 h-60 blur-[250px] left-0 top-44 z-[-10]"/>

    <div className="rounded-full bg-red-600 absolute w-96 h-96 blur-[300px] end-0 bottom-[-1] z-[-10]"/>
    <div className="rounded-full bg-purple-600 absolute w-96 h-96 blur-[300px] end-0 bottom-32 z-[-10]"/>
    </section>
  </>;
};

export default Projects;
