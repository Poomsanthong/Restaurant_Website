import React from "react";
import food1 from "../assets/Red_curry.png";
import food2 from "../assets/Massaman_curry.png";
import food3 from "../assets/Green_curry.png";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: food3,
      name: "Fast Delivery",
      description:
        "Enjoy hot and fresh meals delivered to your door within 30 minutes, guaranteed.",
    },
    {
      id: 2,
      img: food3,
      name: "Fresh Ingredients",
      description:
        "We use locally sourced, high-quality ingredients to craft every dish with care.",
    },
    {
      id: 3,
      img: food3,
      name: "Custom Orders",
      description:
        "Personalize your meal just the way you like extra spicy, no onions, or gluten-free.",
    },
  ];

  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary font-semibold mb-2">
              Our Offerings
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-sm text-gray-400">
              {" "}
              We offer a variety of services to make your dining experience
              exceptional.
            </p>
          </div>
          {/*  Card Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-5 place-items-center text-center justify-center">
            {servicesData.map(({ id, img, name, description }) => (
              <div
                key={id}
                data-aos="zoom-in"
                data-duration="400"
                className="md:scale-105 max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
              >
                <div className="h-full">
                  <img
                    src={img}
                    alt={name}
                    className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-110  group-hover:rotate-6 duration-300"
                  />
                  <h1 className="text-lg font-bold">{name}</h1>
                  <p className="text-gray-500 dark:text-gray-300 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
