import React from "react";
import bannerImage from "../assets/banner-bg.jpg";

const Banner = () => {
  return (
    <section
      data-aos="slide-up"
      data-duration="400"
      className="relative w-full min-h-80 sm:min-h-[420px] lg:min-h-[550px] rounded-2xl overflow-hidden shadow"
    >
      {/* Background image */}
      <img
        src={bannerImage}
        alt="Signature green curry"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <div className="text-center text-white max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Taste the Heart of Thai Cuisine
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90">
            Fresh ingredients, rich spices, and authentic flavors in every bowl.
          </p>
          <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-white/90 text-gray-900 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white transition"
            >
              Order Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/70 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
