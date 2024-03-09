import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return <>
    {/* responsive img */}
    <img src="user.webp" alt="user" className="top-5 absolute w-[400px] h-[650px] md:w-0 md:h-0 -z-5 opacity-10" />

      <section className="px-4 pb-24 flex md:flex-row flex-col items-center justify-between max-w-screen-2xl mx-auto">

        <div className="py-48 z-[1]">
          <div className="text-center md:text-left">
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
              Mi nombre es Mauro Cáceres.
              <br/>
              Soy Desarrollador Full-Stack en Argentina.
              <br/>
              Actualmente creo Sitios Web como Freelancer.
            </p>
            <div className='text-red-500 space-x-3 space-y-10'>
              <button><div className="fa-brands fa-github red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-brands fa-linkedin red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-brands fa-whatsapp red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
              <button><div className="fa-regular fa-envelope red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
            </div>
          </div>
        </div>
  
        <div className="flex relative">

        <img src="user.webp" alt="user" className="hidden md:inline-block w-[500px] lg:w-[550px] xl:pr-16 z-[5]" />
          {/* gradients*/}
          <div className="hidden md:inline-block rounded-full bg-red-400 absolute w-96 h-96 blur-[300px] right-0"/>
          <div className="hidden md:inline-block rounded-full bg-purple-600 absolute w-96 h-96 blur-[300px] bottom-0 left-0"/>
        </div>
      </section>
      </>;
  };
  
  export default Hero;