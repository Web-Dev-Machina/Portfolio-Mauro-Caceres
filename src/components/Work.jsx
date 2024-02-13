const Work = () => {
  return <>
    <section className=" mx-auto relative px-4 pb-32">
      <div className="items-center px-4 max-w-screen-xl mx-auto">
        <h2 className="py-16 font-poppins font-semibold text-[40px] sm:text-[60px] md:text-[44px] lg:text-[60px] xl:text-[65px] text-white leading-[75px] lg:leading-[100px]">
          Mis <span className="text-red-500 red-glow">Proyectos</span>
        </h2>
      </div>

      {/* Responsive */}
      <div className="hidden sm:flex xl:hidden flex-col justify-between gap-y-12 items-center max-w-screen-xl mx-auto">

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card1.webp')"}}>
            <div className="button-child gap-12 hidden">
              <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-4 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">3D Website Portfolio</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex">
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
            </div>
          </div>
        </div>

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center gap-12 h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card2.webp')"}}>
            <div className="button-child gap-12 hidden">
              <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-4 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">Personal Portfolio</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex gap-x-1.5">
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#spline</span>
            </div>
          </div>
        </div>

        <div className="flex rounded-md overflow-hidden mx-auto card-glow z-0">
          <div className="img-resp-child flex flex-row items-center justify-center gap-12 h-auto w-[350px] md:w-[400px] lg:[500px] bg-cover text-center bg-center overflow-hidden" style={{backgroundImage: "url('card3.webp')"}}>
            <div className="button-child gap-12 hidden">
              <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            </div>
          </div>
          <div className="flex flex-col bg-purple-700/10 backdrop-blur-sm p-4 justify-between leading-normal py-5 w-auto">
            <div className="mb-8">
              <div className="text-white font-bold text-xl mb-2">FGA Consulting</div>
              <p className="text-gray-400 max-w-[470px] items-center justify-center font-light text-lg leading-6 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex gap-x-1">
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-2 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-2 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
              <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-2 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#flowbite</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Desktop */}
      <div className="flex sm:hidden xl:flex flex-col xl:flex-row justify-between gap-y-12 items-center max-w-screen-xl mx-auto">

        <div className="max-w-sm rounded shadow-lg card-glow">
          <div className="relative">

            <div className="flex justify-center gap-x-10 items-center py-14">
              <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            </div>

            <img className="absolute top-0 img-child" src="card1.webp" alt="Portfolio-3D"/>
          </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">3D Website Portfolio</div>
          <p className="text-gray-400 font-light text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
        </div>
      </div>
          

      <div className="max-w-sm rounded  shadow-lg card-glow">
      <div className="relative">

        <div className="flex justify-center gap-x-10 items-center py-14">
          <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
          <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
        </div>

        <img className="absolute top-0 img-child" src="card2.webp" alt="Personal Portfolio"/>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">Personal Portfolio</div>
          <p className="text-gray-400 font-light text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#spline</span>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg card-glow">
        <div className="relative">

          <div className="flex justify-center gap-x-10 items-center py-14">
            <button><div className="fa-brands fa-github text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            <button><div className="fa-solid fa-play text-red-500 hover:text-white bg-purple-950/70 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
          </div>

          <img className="absolute top-0 img-child" src="card3.webp" alt="FGA Consulting"/>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">FGA Consulting</div>
          <p className="text-gray-400 font-light text-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
          <span className="inline-block hover:text-white  bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#flowbite</span>
        </div>
      </div>

    </div>
    <div className="rounded-full bg-purple-600 absolute w-72 h-72 blur-[250px] left-0 top-72 z-[-10]"/>
    <div className="rounded-full bg-red-600 absolute w-60 h-60 blur-[250px] left-0 top-44 z-[-10]"/>

    <div className="rounded-full bg-red-600 absolute w-96 h-96 blur-[300px] end-0 bottom-[-1] z-[-10]"/>
    <div className="rounded-full bg-purple-600 absolute w-96 h-96 blur-[300px] end-0 bottom-32 z-[-10]"/>
    </section>
  </>;
};

export default Work;
