
import "./App.css";


import About from "./components/About";
import Ethics from "./components/Ethics";

import Services from "./components/Services";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

import Footer from "./components/Footer";
import Numbers from "./components/Numbers";

import Testimonials from "./components/Testimonials";

import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="">
    {/* WhatsApp icon */}
    <a
        href="https://wa.me/918087502308?text=I%20want%20a%20website%20for%20my%20business"
        class="whatsapp_float"

        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      {/* <header className="App-header">
    <h1>hi there
    </h1>
      </header> */}
      {/* <h1 className="text-7xl font-bold">hi there</h1> */}
      {/* <Navbar />
      <Landing /> */}
      <Banner />
      <Services />
      <About />
      {/* <Team />    */}
      <Testimonials />
      {/* <Reviews /> */}
      <Ethics />
      {/* <Work /> */}
      <Carousel />
      <Numbers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// just keep importing and adding components in this file
