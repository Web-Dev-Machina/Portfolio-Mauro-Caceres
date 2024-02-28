
const Profile = () => {
  return <>
  
  <section className="px-4 ">
    <div className="flex max-w-screen-xl mx-auto">
        <h2 className="py-16 font-poppins font-semibold text-[40px] sm:text-[60px] md:text-[44px] lg:text-[60px] xl:text-[65px] text-white leading-[75px] lg:leading-[100px]">
          Mi <span className="text-red-500 red-glow">Experiencia</span>
        </h2>
    </div>

    <div className=" max-w-screen-xl mx-auto">

      <p className="max-w-[470px] md:max-w-[550px] text-white font-light text-lg leading-6 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore quidem cum ullam unde nobis laborum tempora officia sint at perspiciatis, debitis perferendis ad repellat, veniam laudantium expedita minima iure?
      </p>

      <div className="grid grid-cols-2 gap-10 py-10">  
        <div className="bg-purple-950/30 text-white backdrop-blur-sm rounded-full">1</div>  
        <div className="bg-purple-950/30 text-white backdrop-blur-sm rounded-full">2</div>  
        <div className="bg-purple-950/30 text-white backdrop-blur-sm rounded-full">3</div>  
        <div className="bg-purple-950/30 text-white backdrop-blur-sm rounded-full">4</div>  
      </div> 


    </div>
    
    {/*
      <img src="https://skillicons.dev/icons?i=html,css,js,react,vite,git,nodejs,express,firebase,netlify,vercel,tailwind,sass,bootstrap,threejs&perline=5" />
    */}

  </section>
  </>;
};

export default Profile;
