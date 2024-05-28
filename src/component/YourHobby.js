import React from "react";
import object from "../assets/OBJECTS.png"
import object2 from "../assets/object2.png";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Your <span className="text-purple-500">Hobby</span> , Your{" "}
          <span className="text-blue-500">Community</span>...
        </h1>
        <div className="mt-8">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600">
            Get Started
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <img src={object} alt="Hobby Image 1" className="h-24 md:h-32" />
          <img src={object2} alt="Hobby Image 1" className="h-24 md:h-32" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
