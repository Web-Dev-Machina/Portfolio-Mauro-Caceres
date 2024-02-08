import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return <>
      <section className="flex md:flex-row flex-col items-center justify-between">
        <div className="xl:px-0 sm:px-16 px-6">
  
          <div className="text-left">
            <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              ¡Hola! Soy&nbsp;
              <TypeAnimation className='text-purple-900'
                sequence={[
                    'Mauro',
                    1000,
                    'Desarrollador',
                    1000,
                    'Freelancer',
                    1000,
                ]}
                speed={50}
                style={{color: "rgb(239, 68, 68)"}}
                repeat={Infinity}
                />
            </h1>
          

          <p className="max-w-[470px] mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore quidem cum ullam unde nobis laborum tempora officia sint at perspiciatis, debitis perferendis ad repellat, veniam laudantium expedita minima iure?
          </p>
        </div>
        </div>
  
        <div className="flex relative">
          <img src="user.png" alt="billing" className="w-[500px] relative z-[5]" />
  
          {/* gradient start */}
          <div className="rounded-full bg-red-400 absolute w-96 h-96 blur-[300px] right-0"/>
          <div className="rounded-full bg-purple-600 absolute w-96 h-96 blur-[300px] bottom-0 left-0"/>
          {/* gradient end */}
        </div>

      </section>
      </>;
  };
  
  export default Hero;