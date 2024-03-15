const Navbar = (props) => {
  //Props declaration
  const parentProps = props;

  const inView = parentProps.inView;
  const clickHandler = parentProps.clickHandler.clickHandler;

  return <>
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-[1000] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen px-5 sm:px-10 xl:px-0">
      <div className="shadow-2xl text-red-500 flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-10 md:px-40 xl:px-0 h-[55px] xl:h-max xl:py-8 bg-purple-700/10 backdrop-blur-sm text-3xl rounded-full">

        <button aria-label="Go to Hero" onClick={() => clickHandler("hero")}>
          <i className={`fa-sharp fa-light fa-rocket-launch text-red-500 transition linear duration-500 ${inView[0] ? "text-red-100" : ""}`}></i>
          </button>

        <button aria-label="Go to Projects " onClick={() => clickHandler("projects")}>
          <i className={`fa-light fa-laptop-code text-red-500 transition linear duration-500 ${inView[1] ? "text-red-100" : ""}`}></i>
        </button>

        <button aria-label="Go to Experience" onClick={() => clickHandler("experience")}>
          <i className={`fa-light fa-user text-red-500 transition linear duration-500 ${inView[2] ? "text-red-100" : ""}`}></i>
        </button>

        <button aria-label="Go to Contact" onClick={() => clickHandler("contact")}>
          <i className={`fa-light fa-comments text-red-500 transition linear duration-500 ${inView[3] ? "text-red-100" : ""}`}></i>
        </button>

      </div>
    </nav>
    
  </>;
};

export default Navbar;