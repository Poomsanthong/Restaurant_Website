import React from "react";
import SpicyImg from "../assets/spicy.png";
import BitterImg from "../assets/bitter.png";
import SweetImg from "../assets/sweet.png";
import SourImg from "../assets/sour.png";
import SaltyImg from "../assets/salty.png";
import FlavorsImg from "../assets/flavours-img.png";
const Flavours = () => {
  const flavorCards = [
    {
      id: 1,
      img: SpicyImg,
      title: "Spicy",
    },
    {
      id: 2,
      img: BitterImg,
      title: "Bitter",
    },
    {
      id: 3,
      img: SweetImg,
      title: "Sweet",
    },
    {
      id: 4,
      img: SourImg,
      title: "Sour",
    },
    {
      id: 5,
      img: SaltyImg,
      title: "Salty",
    },
  ];

  return (
    <section className=" relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[550px] rounded-2xl overflow-hidden shadow">
      {/* Left image */}
      <div data-aos="slide-up" data-aos-duration="300" className="container">
        <div className="grid grid-cols-1  sm:grid-cols-2   gap-6">
          <img
            src={FlavorsImg}
            alt="food image "
            className=" max-w-[500px] w-full mx-auto object-contain py-10"
          />
          {/* Right Content */}
          <div className="flex flex-col justify-center gap-6 p-4">
            <h1 className="text-3xl sm:text-4xl bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary font-bold mb-2">
              {" "}
              True Taste of Thai Cuisine
            </h1>
            <p className="text-gray-500 dark:text-gray-300 tracking-wide leading-4.5">
              At Chang Thai Restaurant we are proud to serve only authentic Thai
              dishes in authentic Thai surroundings. Our goal is to take our
              clients on an unforgettable journey of Thai flavours and show the
              beauty of Thai culture and tradition. We give importance to the
              smallest details, including our interior which is fully made of
              items brought from Thailand. Nowhere else in Malta can you have
              such a full Thai experience!
            </p>
          </div>
        </div>

        {/* Flavor sections */}
        <div className="hidden sm:grid">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center py-10">
            The Art of Five Flavours
          </h2>

          <div className="grid sm:grid-cols-5 lg:grid-cols-5 gap-6 p-4">
            {/* Flavor cards go here */}
            {flavorCards.map((card) => (
              <div key={card.id} className=" rounded-lg p-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavours;
