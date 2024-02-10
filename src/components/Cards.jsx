import "./Cards.css";
{/**/}
const Cards = () => {
  return <>
  {/*Sección exterior*/}
  <div className="container">                   
    {/*1er Card exterior*/}
    <div className="parent card2">
        {/*2da Card interior*/}
        <div className="card ">
            <div className="content-box ml-5 mt-10">
                <h1 className="card-title">Card Title</h1>
                <p className="card-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                </p>
                <span className="see-more">See More</span>
            </div>
            <div className="date-box">
                <span className="month">JUNE</span>
                <span className="date">29</span>
            </div>
        </div>
    </div>

    <div className="parent card3">
        <div className="card">
            <div className="content-box">
                <h1 className="card-title">Card Title</h1>
                <p className="card-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                </p>
                <span className="see-more">See More</span>
            </div>
            <div className="date-box">
                <span className="month">JUNE</span>
                <span className="date">29</span>
            </div>
        </div>
    </div>

    <div className="parent card2">
        <div className="card ">
            <div className="content-box">
                <h1 className="card-title">Card Title</h1>
                <p className="card-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi illo nam repudiandae tempore quaerat veritatis doloremque omnis molestias id.
                </p>
                <span className="see-more">See More</span>
            </div>
            <div className="date-box">
                <span className="month">JUNE</span>
                <span className="date">29</span>
            </div>
        </div>
    </div>

    <div className="parent card4"></div>
        
    </div>
  
  </>
};

export default Cards;
