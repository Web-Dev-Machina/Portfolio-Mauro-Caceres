
const Contact = () => {
  return <>
  
    <section className="px-4">

        <div className="pb-12 flex flex-col max-w-screen-xl mx-auto items-center sm:items-start">
            <h2 className="mx-auto md:mx-0 font-poppins font-semibold text-[30px] sm:text-[40px] md:text-[33px] lg:text-[40px] xl:text-[50px] text-white leading-[75px] lg:leading-[100px]">
                Mi <span className="text-red-500 red-glow">Contacto</span>
                </h2>

                <p className="text-white font-light text-lg leading-6 max-w-[470px] md:max-w-[550px] text-center md:text-left">
                    Visita mis redes o hazme una consulta, podemos trabajar en un proyecto juntos.
                </p>

                <div className='text-red-500 space-x-3 space-y-5'>
                    <button><div className="fa-brands fa-github red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
                    <button><div className="fa-brands fa-linkedin red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
                    <button><div className="fa-brands fa-whatsapp red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
                    <button><div className="fa-regular fa-envelope red-glow bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full p-4 px-5"></div></button>
                </div>
        </div>

        <div className="max-w-screen-xl mx-auto font-light text-lg">

            <form className="grid gap-5 max-w-screen-md mx-auto">

                <div className="bg-purple-950/10 text-white backdrop-blur-2xl rounded-md p-1">
                    <input
                        className="placeholder-purple-300 border border-purple-400 w-full px-2 rounded-md bg-purple-950/10"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="bg-purple-950/10 text-white backdrop-blur-2xl rounded-md p-1">
                <input
                        className="placeholder-purple-300 border border-purple-400 w-full px-2 rounded-md bg-purple-950/10"
                        type="email"
                        name="email"
                        placeholder="JohnDoe@ejemplo.com"
                        required
                    />
                </div>

                <div className="bg-purple-950/10 text-white backdrop-blur-2xl rounded-md">
                    <div className="border-purple-400 rounded-md pt-1 px-1 -mb-0.5">
                        <textarea
                            className="placeholder-purple-300 border border-purple-400 w-full px-2 pb-10 rounded-md bg-purple-950/10"
                            name="message"
                            placeholder="Escribe tu consulta aquí"
                            required
                        />
                    </div>
                </div>

                <button
                    className="font-normal neon-button max-w-44 mx-auto backdrop-blur-md my-5"
                    type="submit"
                >
                    Enviar
                </button>
            </form> 
        </div>

    </section>

  </>;
};

export default Contact;
