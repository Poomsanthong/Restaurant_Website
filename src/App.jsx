import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Flavours from "./components/Flavours";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const App = () => {
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
