import React from "react";
import { FaQuoteLeft, FaPlay } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <FaQuoteLeft className="text-purple-500 text-3xl md:text-4xl" />
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 ml-2">
            Testimonials
          </h2>
        </div>
        <div className="text-gray-600 text-lg md:text-xl mx-auto max-w-4xl">
          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center">
          <button className="bg-purple-500 text-white p-4 rounded-full flex items-center justify-center w-16 h-16 mb-4 md:mb-0 md:mr-4">
            <FaPlay className="text-2xl" />
          </button>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/60" // Placeholder image, replace with the actual image source
              alt="Shubha Nagarajan"
              className="rounded-full w-16 h-16 mx-auto mb-2"
            />
            <h3 className="font-bold text-gray-800">Shubha Nagarajan</h3>
            <p className="text-blue-600">Classical Dancer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
