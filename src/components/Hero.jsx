import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return <>
    {/* responsive img */}
    <img src="user.webp" alt="user" className="top-5 absolute w-[400px] h-[650px] md:w-0 md:h-0 -z-5 opacity-10" />

      <section className="flex md:flex-row flex-col items-center justify-between">

        <div className="py-40 xl:px-0 sm:px-16 px-6 z-[1]">
          <div className="text-left">
            <h1 className="font-poppins font-semibold text-[50px] sm:text-[60px] md:text-[52px] lg:text-[70px] xl:text-[75px] text-white leading-[75px] lg:leading-[100px]">
              ¡Hola! Soy
              <br/>
              <TypeAnimation className='red-glow'
                sequence={[
                    'Mauro',
                    1000,
                    'Desarrollador',
                    1000,
                    'Freelancer',
                    1000,
                ]}
                speed={50}
                
                repeat={Infinity}
                />
            </h1>
          

          <p className="max-w-[470px] md:max-w-[550px] mt-5 text-white font-light text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore quidem cum ullam unde nobis laborum tempora officia sint at perspiciatis, debitis perferendis ad repellat, veniam laudantium expedita minima iure?
          </p>
          <div className='text-red-500 space-x-5 space-y-10'>
            <button><i className="fa-brands fa-github red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></i></button>
            <button><i className="fa-brands fa-linkedin red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></i></button>
            <button><i className="fa-brands fa-whatsapp red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></i></button>
          </div>
        </div>

        {/* responsive gradients
        <div className="rounded-full bg-red-400 absolute w-96 h-96 md:hidden blur-[300px] top-0 right-0 opacity-60"/>
        <div className="rounded-full bg-purple-800 absolute w-96 h-96 md:hidden blur-[300px] top-0 right-0 opacity-60"/>
      */}
        </div>
  
        <div className="flex relative">

        <img src="user.webp" alt="user" className="hidden md:inline-block w-[500px] z-[5]" />
          {/* gradients*/}
          <div className="hidden md:inline-block rounded-full bg-red-400 absolute w-96 h-96 blur-[300px] right-0"/>
          <div className="hidden md:inline-block rounded-full bg-purple-600 absolute w-96 h-96 blur-[300px] bottom-0 left-0"/>
        </div>
      </section>
      </>;
  };
  
  export default Hero;