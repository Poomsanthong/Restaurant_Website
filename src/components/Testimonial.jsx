import React from "react";
import Slider from "react-slick";
import Avatar, { genConfig } from "react-nice-avatar";

const Testimonial = () => {
  const config1 = genConfig();
  const config2 = genConfig();
  const config3 = genConfig();

  const TestimonialData = [
    {
      name: "John Doe",
      img: <Avatar className="w-16 h-16 mx-auto" {...config1} />,
      id: 1,
      content:
        "The food here is absolutely amazing! The flavors are authentic and the service is top-notch. Highly recommend to anyone looking for a great dining experience.",
    },
    {
      name: "Jane Smith",
      img: <Avatar className="w-16 h-16 mx-auto" {...config2} />,
      id: 2,
      content:
        "I had a wonderful time at this restaurant. The ambiance is perfect for a romantic dinner, and the staff is incredibly attentive.",
    },
    {
      name: "Bob Johnson",
      img: <Avatar className="w-16 h-16 mx-auto" {...config3} />,
      id: 3,
      content:
        "This is my go-to place for special occasions. The menu is diverse, and everything I've tried has been delicious.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="container py-20 ">
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary font-semibold mb-2">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-sm text-gray-400">
            {" "}
            We offer a variety of services to make your dining experience
            exceptional.
          </p>
        </div>
        {/*  Testimonial grid */}
        <div className="grid grid-cols-1 max-w-[600px] gap-6 mx-auto">
          <Slider {...settings}>
            {TestimonialData.map(({ img, content, id, name }) => (
              <div key={id} className="my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl  dark:bg-gray-800 bg-primary/10 relative">
                  {img}
                  <p className="text-sm mt-4">{content}</p>
                  <h1 className="text-xl mt-4 font-semibold">{name}</h1>
                  <p className="text-black/20 text-9xl font-serif absolute top-[-15px] right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>{" "}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
