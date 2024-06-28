
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import web1 from "../assets/website1.jpg"
import web2 from "../assets/website2.jpg"
import web3 from "../assets/website3.jpg"
import web4 from "../assets/website4.jpg"
import web5 from "../assets/website5.jpg"
import web6 from "../assets/website6.jpg"

const myCarousel = () => {
  return (
    <section className="my-5 mx-auto"
    >
      <Carousel
      
        showArrows={true}
        autoPlay={true}
        
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        width='90%'
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img alt="carousel website template" src={web1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img alt="carousel website template" src={web2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img alt="carousel website template" src={web3} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img alt="carousel website template" src={web4} />
          {/* <p className="legend">Legend 4</p> */}
        </div>
        <div>
          <img alt="carousel website template" src={web5} />
          {/* <p className="legend">Legend 5</p> */}
        </div>
        <div>
           <img alt="carousel website template" src={web6} />
          {/* <p className="legend">Legend 6</p> */}
        </div>
      </Carousel>
    </section>
  );
};

export default myCarousel;
