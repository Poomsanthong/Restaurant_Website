import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import bgImg from "../assets/bg-image.png";

import { useState } from "react";
const ImageList = [
  {
    id: 1,
    img: food1,
  },
  {
    id: 2,
    img: food2,
  },
  {
    id: 3,
    img: food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  const [ImageID, setImageID] = useState(food3);
  return (
    <>
      <div
        className="min-h-[540px] sm:min-[600px] bg-gray-120 dark:bg-gray-950 dark:text-white duration-200 flex items-center justify-center"
        style={bgImage}
      >
        <div className="container pb-8 sm:pd-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {/* { text content} */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to Our Restaurant
              </h1>
              <p className="text-sm">Experience the best dining with us.</p>
              <div className="">
                <button className="bg-gradient-to-r from-primary to-secondary hover:bg-blue-600 text-white py-3 px-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg mt-4">
                  Explore Menu
                </button>
              </div>
            </div>
            {/* { images } */}

            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[300px] flex justify-center items-center relative">
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  src={ImageID}
                  alt="Food Image"
                  className="w-[300px] sm:w-[400px] mx-auto spin"
                />
              </div>
              {/* { image selector } */}
              <div className="flex lg:flex-col absolute lg:top-1/2 lg:translate-y-[-50%] lg:py-2 justify-center gap-4  bottom-[0px] lg:-right-10 bg-white/30 rounded-full ">
                {ImageList.map(({ id, img }) => (
                  <img
                    key={id}
                    src={img}
                    alt={`Food ${id}`}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                    onClick={() => setImageID(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
