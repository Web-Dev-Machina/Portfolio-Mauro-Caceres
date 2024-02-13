const Work = () => {
  return <>
    <section className=" mx-auto relative px-4 pb-32">
      <div className="items-center px-4 max-w-screen-xl mx-auto">
        <h2 className="py-16 font-poppins font-semibold text-[40px] sm:text-[60px] md:text-[44px] lg:text-[60px] xl:text-[65px] text-white leading-[75px] lg:leading-[100px]">
          Mis <span className="text-red-500 red-glow">Proyectos</span>
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-y-12 items-center max-w-screen-xl mx-auto">

        <div className="max-w-sm rounded  shadow-lg card-glow bg-purple-700/5 backdrop-blur-xl">
        <img className="w-full" src="card1.webp" alt="Portfolio-3D"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">3D Website Portfolio</div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
        </div>
      </div>
          

      <div className="max-w-sm rounded  shadow-lg card-glow">
        <img className="w-full" src="card2.webp" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">Personal Portfolio</div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#threejs</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#spline</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg card-glow">
        <img className="w-full" src="card3.webp" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">FGA Consulting</div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-4 pb-2 flex">
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#react</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#tailwind</span>
          <span className="inline-block bg-purple-700/10 backdrop-blur-xl rounded-full px-3 py-1 text-sm font-medium text-red-500 mr-2 mb-2">#flowbite</span>
        </div>
      </div>

    </div>
    <div className="rounded-full bg-purple-700 absolute w-60 h-60 blur-[300px] left-[-1] bottom-0 -z-10"/>
    </section>
  </>;
};

export default Work;
