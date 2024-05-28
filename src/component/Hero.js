import React from "react";
import groupPic from "../assets/Group 27.png";
import SignIn from "./SignIn";

function Hero() {
  return (
    <div className="flex bg-zinc-50 py-12">
      {/* Full-width on mobile view */}
      <div className="w-full lg:w-4/5 px-6">
        <h1 className="text-3xl font-semibold font-poppins italic text-left mb-8">
          Explore your <span className="text-blue-300">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <h4 className="text-md font-thin leading-loose mt-4 mb-4 text-left">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </h4>
        <h3 className="text-md font-light leading-loose mt-4 mb-4 text-left">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </h3>
        <img src={groupPic} alt="group pic" />
      </div>

      {/* Hidden on mobile view */}
      <div className="hidden lg:flex lg:flex-3 pl-6 w-3/5">
        <h1 className="text-2xl font-semibold italic text-center">
          <SignIn />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
