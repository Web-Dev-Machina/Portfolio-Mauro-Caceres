
const Contact = () => {
  return <>
  
    <section className="px-4">

        <div className="py-28 flex max-w-screen-xl mx-auto">
            <h2 className="mx-auto md:mx-0 font-poppins font-semibold text-[30px] sm:text-[40px] md:text-[33px] lg:text-[40px] xl:text-[50px] text-white leading-[75px] lg:leading-[100px]">
                Mi <span className="text-red-500 red-glow">Contacto</span>
                </h2>

                <p></p>
        </div>

        <div className=" max-w-screen-xl mx-auto">

            <div className="grid grid-cols-1 gap-5 max-w-screen-md mx-auto">

                <div className="bg-purple-950/10 text-white backdrop-blur-2xl rounded-full">
                    <div className="py-4">Nombre</div>
                </div>

                <div className="bg-purple-950/30 text-white backdrop-blur-2xl rounded-full">
                    <div className="py-4">Email</div>
                </div> 

                <div className="bg-purple-950/30 text-white backdrop-blur-2xl rounded-full">
                    <div className="py-4">Escriba su consulta</div>
                </div> 

                <button href="#" className="neon-button max-w-44 mx-auto backdrop-blur-sm">Enviar</button>
            </div> 
        </div>

    </section>

  </>;
};

export default Contact;
