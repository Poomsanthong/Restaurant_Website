import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Flavours from "./components/Flavours";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <div className="bg-white ">
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <Flavours />
      <Testimonial />
    </div>
  );
};

export default App;
