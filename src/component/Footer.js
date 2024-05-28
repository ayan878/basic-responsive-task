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
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isHowDoIOpen, setIsHowDoIOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  // Data for footer sections
  const sections = [
    {
      title: "HobbyCue",
      state: isAboutUsOpen,
      setState: setIsAboutUsOpen,
      links: [
        { text: "About Us", to: "/about-us" },
        { text: "Our Services", to: "/services" },
        { text: "Work with Us", to: "/work-with-us" },
        { text: "FAQ", to: "/faq" },
        { text: "Contact Us", to: "/contact-us" },
      ],
    },
    {
      title: "How do I",
      state: isHowDoIOpen,
      setState: setIsHowDoIOpen,
      links: [
        { text: "Sign Up", to: "/sign-up" },
        { text: "Add a Listing", to: "/add-listing" },
        { text: "Claim Listing", to: "/claim-listing" },
        { text: "Post a Query", to: "/post-query" },
        { text: "Add a Blog Post", to: "/add-blog-post" },
        { text: "Other Queries", to: "/other-queries" },
      ],
    },
    {
      title: "Quick Links",
      state: isQuickLinksOpen,
      setState: setIsQuickLinksOpen,
      links: [
        { text: "Listing Pages", to: "/listing-pages" },
        { text: "Blog Posts", to: "/blog-posts" },
        { text: "Shop/Store", to: "/shop-store" },
        { text: "Community", to: "/community" },
        { text: "Sitemap", to: "/sitemap" },
      ],
    },
  ];

  const toggleSection = (index) => {
    const newState = !sections[index].state;
    sections[index].setState(newState);
  };

  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        {sections.map((section, index) => (
          <div key={index} className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <button
              className="w-full flex justify-between items-center text-left text-sm font-bold md:text-xl mb-2"
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <FaChevronDown className="block md:hidden" />
            </button>
            <ul
              className={`space-y-2 ${
                section.state ? "block" : "hidden"
              } md:block`}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-left md:text-left">
                  <Link to={link.to} className="hover:text-gray-400">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
          <h2 className="font-bold text-xl mb-2 ">Social Media</h2>
          <div className="flex space-x-4 justify-center items-center">
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
