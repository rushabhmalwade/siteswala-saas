import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Work = () => {
  return (
    <section
      id="work"
      className=" bg-[#4580ec] min-h-[85vh] h-[90vh] lg:min-h-[78vh] flex flex-col items-center "
    >
      <div className="carousel-wrapper h-8">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false}>
          <div>
            <img alt="website design 1" src="../img-01.jpg" />
          </div>
          <div>
            <img alt="website design 2" src="../img-02.jpg" />
          </div>
          <div>
            <img alt="website design 3" src="../img-03.jpg" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Work;
