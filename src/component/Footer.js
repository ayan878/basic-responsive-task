import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaEnvelope,
  FaChevronDown, // Import chevron down icon
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isHowDoIOpen, setIsHowDoIOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <button
            className="w-full flex justify-between items-center text-left md:text-base font-bold text-xl mb-2"
            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
          >
            <span>HobbyCue</span>
            <FaChevronDown className="block md:hidden" />
          </button>
          <ul
            className={`space-y-2 ${
              isAboutUsOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="text-left md:text-left">
              <Link to="/about-us" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/services" className="hover:text-gray-400">
                Our Services
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/work-with-us" className="hover:text-gray-400">
                Work with Us
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/faq" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/contact-us" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <button
            className="w-full flex justify-between items-center text-left md:text-base font-bold text-xl mb-2"
            onClick={() => setIsHowDoIOpen(!isHowDoIOpen)}
          >
            <span>How do I</span>
            <FaChevronDown className="block md:hidden" />
          </button>
          <ul
            className={`space-y-2 ${
              isHowDoIOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="text-left md:text-left">
              <Link to="/sign-up" className="hover:text-gray-400">
                Sign Up
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/add-listing" className="hover:text-gray-400">
                Add a Listing
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/claim-listing" className="hover:text-gray-400">
                Claim Listing
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/post-query" className="hover:text-gray-400">
                Post a Query
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/add-blog-post" className="hover:text-gray-400">
                Add a Blog Post
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/other-queries" className="hover:text-gray-400">
                Other Queries
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <button
            className="w-full flex justify-between items-center text-left md:text-base font-bold text-xl mb-2"
            onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
          >
            <span>Quick Links</span>
            <FaChevronDown className="block md:hidden" />
          </button>
          <ul
            className={`space-y-2 ${
              isQuickLinksOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="text-left md:text-left">
              <Link to="/listing-pages" className="hover:text-gray-400">
                Listing Pages
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/blog-posts" className="hover:text-gray-400">
                Blog Posts
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/shop-store" className="hover:text-gray-400">
                Shop/Store
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/community" className="hover:text-gray-400">
                Community
              </Link>
            </li>
            <li className="text-left md:text-left">
              <Link to="/sitemap" className="hover:text-gray-400">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="font-bold text-xl mb-2">Invite Friends</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Email ID"
              className="p-2 w-full border border-gray-300 rounded"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Invite
            </button>
          </div>
          <h2 className="font-bold text-xl mb-2">Social Media</h2>
          <div className="flex space-x-4">
            <Link className="text-gray-600 hover:text-gray-800">
              <FaFacebookF />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaInstagram />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaPinterest />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaLinkedinIn />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaYoutube />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaTelegramPlane />
            </Link>
            <Link className="text-gray-600 hover:text-gray-800">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 text-gray-500">
        © 2024 Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
