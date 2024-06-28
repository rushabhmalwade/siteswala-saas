import React from "react";




const Landing = () => {
  return (
    <section
      id="home"
      className=" bg-[#00F2DE] min-h-[85vh] h-[100vh] lg:min-h-[78vh] flex flex-col items-center "
    >
      <div className="mt-[300px] container">
        <h1 className="mx-auto leading-tight font-bold text-center text-[110px]
        text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white
        " style={{fontFamily: 'Ubuntu'}}>
        Your Partner in Digital
          <br />
          Transformation: Siteswala
        </h1>
        <p className="mx-auto font-semibold text-center text-3xl mt-[25px]">
        Transform Your Online Presence with Our Expert Website Development Services! 
        </p>
      </div>
    </section>
  );
};

export default Landing;
