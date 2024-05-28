import React, { useState } from "react";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Lock, X } from "lucide-react";
import Logo from "../assets/SmallLogo.jpg";
import { Link } from "react-router-dom";

function MobileSignIn() {
  const [isJoinIn, setIsJoinIn] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleButton = () => {
    setIsSignIn(!isSignIn);
    setIsJoinIn(!isSignIn); // Update isJoinIn based on the opposite of isSignIn
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md p-8">
      <div className="flex justify-between w-full items-center">
        <img src={Logo} alt="logo" className="w-16 h-16 p-2 md:w-64 md:h-16" />
        <Link to="/">
          <button className="text-gray-400 focus:outline-none">
            <X />
          </button>
        </Link>
      </div>
      {isSignIn && (
        <>
          <div className="flex gap-6 justify-center items-center mb-4">
            <button
              className={`text-lg border-b-2 ${
                isSignIn
                  ? "border-[#8064A2] text-[#8064A2]"
                  : "border-transparent text-gray-400"
              } font-semibold`}
              onClick={handleButton}
            >
              Sign In
            </button>
            <button
              className={`text-lg border-b-2 ${
                !isSignIn
                  ? "border-[#8064A2] text-[#8064A2]"
                  : "border-transparent text-gray-400"
              } font-semibold`}
              onClick={handleButton}
            >
              Join In
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <button className="border flex items-center w-full h-12 rounded-md p-2 gap-2 hover:bg-gray-100">
              <img src={google} alt="google" className="h-6" />
              <span className="text-sm text-center flex items-center justify-center">
                Continue with Google
              </span>
            </button>
            <button className="border flex items-center w-full h-12 rounded-md p-2 gap-2 hover:bg-gray-100">
              <img src={facebook} alt="facebook" className="h-6" />
              <span className="text-sm text-center flex items-center justify-center">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div className="relative my-4 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 not-italic">Or Sign in with</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="email"
              className={`w-full bg-white text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8064A2] ${
                isJoinIn ? "border-[#8064A2]" : "border-transparent"
              }`}
              placeholder="Email"
            />
            <input
              type="password"
              className={`w-full bg-white text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8064A2] ${
                isJoinIn ? "border-[#8064A2]" : "border-transparent"
              }`}
              placeholder="Password"
            />
            <div className="flex items-center justify-between w-full text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember-me" className="" />
                <label htmlFor="remember-me" className="not-italic">
                  Remember Me
                </label>
              </div>
              <button className="flex items-center">
                <Lock className="w-4 h-4 mr-1" />
                Forgot Password?
              </button>
            </div>
            <button className="text-white text-lg w-full h-12 bg-[#8064A2] rounded-md">
              Continue
            </button>
          </div>
        </>
      )}
      {!isSignIn && (
        <>
          <div className="flex gap-6 justify-center items-center mb-4">
            <button
              className={`text-lg  ${
                isSignIn ? "border-b-2 border-[#8064A2]  text-[#8064A2]" : "text-zinc-400"
              } font-semibold`}
              onClick={handleButton}
            >
              Sign In
            </button>
            <button
              className={`text-lg  ${
                !isSignIn
                  ? "border-b-2 border-[#8064A2] text-[#8064A2]"
                  : "text-zinc-400"
              } font-semibold`}
              onClick={handleButton}
            >
              Join In
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <button className="border flex items-center w-full h-12 rounded-md p-2 gap-2 hover:bg-gray-100">
              <img src={google} alt="google" className="h-6" />
              <span className="text-sm text-center flex items-center justify-center">
                Continue with Google
              </span>
            </button>
            <button className="border flex items-center w-full h-12 rounded-md p-2 gap-2 hover:bg-gray-100">
              <img src={facebook} alt="facebook" className="h-6" />
              <span className="text-sm text-center flex items-center justify-center">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div className="relative my-4 w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 not-italic">Or Join in with</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="email"
              className={`w-full bg-white text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8064A2] ${
                isJoinIn ? "border-[#8064A2]" : "border-transparent"
              }`}
              placeholder="Email"
            />
            <input
              type="password"
              className={`w-full bg-white text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8064A2] ${
                isJoinIn ? "border-[#8064A2]" : "border-transparent"
              }`}
              placeholder="Password"
            />
            <p className="text-xs text-center text-gray-500 not-italic">
              By continuing, you agree to our{" "}
              <span className="text-black">Terms of Service</span> and{" "}
              <span className="text-black">Privacy Policy</span>
            </p>
            <button className="text-white text-lg w-full h-12 bg-[#8064A2] rounded-md">
              Agree and Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MobileSignIn;
