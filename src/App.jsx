import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Flavours from "./components/Flavours";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <Flavours />
      <Testimonial />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
