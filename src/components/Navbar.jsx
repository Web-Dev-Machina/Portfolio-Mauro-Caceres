
const Navbar = () => {
  return <>
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen px-5 sm:px-10 xl:px-0" >
      <div className="shadow-2xl text-red-500 flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-10 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full">
        <button><i className="fa-sharp fa-light fa-rocket-launch"></i></button>
        <button><i className="fa-light fa-laptop-code"></i></button>
        <button><i className="fa-light fa-user"></i></button>
        <button><i className="fa-light fa-comments"></i></button>
      </div>
    </nav>
    
  </>;
};

export default Navbar;