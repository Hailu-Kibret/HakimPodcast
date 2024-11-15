import React, { useState, useEffect } from "react";
import { Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import photo7 from "../assets/images/photo7.jpg";

function Header() {
  const words = ["trust", "loyalty", "belief"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] px-4">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={photo7}
          alt="Medical services background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-white opacity-40"></div>
      </div>

      {/* Content */}
      <div className="mx-auto absolute z-10 flex flex-col justify-center items-center h-full p-4 sm:p-8 lg:p-12 text-center text-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Medical services that you can{" "}
          <span className="inline-block transition-all duration-300 ease-in-out">
            {words[currentWordIndex]}
          </span>
          .
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-md">
          Providing quality care and trusted medical services to help you stay
          healthy.
        </p>
        <Button
          type="primary"
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3"
          size="large"
        >
          Discover More
        </Button>

        {/* Search Form */}
        <form
          className={`absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[60%] flex ${
            showInput ? "flex-col" : "flex-row"
          } justify-center items-center gap-4 pt-6 bg-gray-100 p-6 rounded-lg shadow-lg bg-opacity-60 transition-all duration-300`}
        >
          {/* Large screens: Full search bar */}
          <div className="hidden lg:flex w-full items-center gap-4">
            <input
              type="text"
              placeholder="Search any podcast..."
              className="w-full lg:w-[400px] p-4 rounded-full text-gray-900 font-semibold placeholder-gray-500 focus:outline-none border-2 border-[#007FFF] focus:border-[#007FFF] transition-all duration-200 ease-in-out shadow-sm focus:shadow-lg"
            />
            <Button
              type="primary"
              className="rounded-r-lg bg-[#007FFF] hover:bg-[#005BB5] text-white font-bold px-6 py-3 flex items-center transition-all duration-300"
              size="large"
            >
              Search
            </Button>
          </div>

          {/* Small screens: Collapsible search icon */}
          <div className="flex lg:hidden">
            <Button
              type="primary"
              className="p-3 rounded-full bg-[#007FFF] hover:bg-[#005BB5] text-white transition-all duration-300"
              icon={<SearchOutlined />}
              onClick={(e) => {
                e.preventDefault();
                toggleInput();
              }}
            />
          </div>

          {/* Expanded input on mobile and tablet */}
          {showInput && (
            <div className="lg:hidden mt-4 w-full flex items-center">
              <input
                type="text"
                placeholder="Search any podcast..."
                className="w-full p-4 rounded-full text-gray-900 font-semibold placeholder-gray-500 focus:outline-none border-2 border-[#007FFF] focus:border-[#007FFF] transition-all duration-200 ease-in-out shadow-sm focus:shadow-lg"
              />
              <Button
                type="primary"
                className="rounded-r-lg bg-[#007FFF] hover:bg-[#005BB5] text-white font-bold px-6 py-3 ml-2 transition-all duration-300"
                size="large"
              >
                Search
              </Button>
            </div>
          )}
        </form>

        {/* Social Media Links */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-800 p-4 bg-opacity-75 rounded-lg w-11/12 sm:w-2/3">
          <a
            href="#"
            className="text-2xl text-[#1877F2] transition-transform transform hover:scale-110"
          >
            <FacebookOutlined />{" "}
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#1DA1F2] transition-transform transform hover:scale-110"
          >
            <TwitterOutlined />{" "}
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#E4405F] transition-transform transform hover:scale-110"
          >
            <InstagramOutlined />{" "}
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#FF0000] transition-transform transform hover:scale-110"
          >
            <YoutubeOutlined />{" "}
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
