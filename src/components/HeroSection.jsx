import React from "react";
import { Button, Image } from "antd";
import {
  RightOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import photo7 from "../assets/images/photo7.jpg";
import { useEffect, useState } from "react";

function Header() {
  const words = ["trust", "loyalty", "belief"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={photo7}
          alt="Medical services background"
          preview={false}
          className="object-cover w-full h-full"
        />
        {/* Lighter Overlay for better contrast */}
        <div className="absolute inset-0 bg-white opacity-40"></div>
      </div>

      {/* Content */}
      <div className="mx-auto absolute z-10 flex flex-col justify-center h-full p-6 md:p-12 lg:p-24 text-black">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Medical services that you can{" "}
            <span
              className="inline-block transition-all duration-300 ease-in-out"
              style={{ maxWidth: "135px" }} // adjust width for the longest word
            >
              {words[currentWordIndex]}
            </span>
            .
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black">
            Providing quality care and trusted medical services to help you stay
            healthy.
          </p>
          <Button
            type="primary"
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            size="large"
          >
            Discover More
          </Button>
        </div>

        {/* Search Form */}
        <form className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full sm:w-[80%] lg:w-[60%] flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 bg-gray-100 p-8 rounded-lg shadow-lg bg-opacity-60">
          <input
            type="text"
            placeholder="Search any podcast..."
            className="w-full sm:w-[70%] lg:w-[400px] p-4 rounded-full text-gray-900 font-semibold placeholder-gray-500 focus:outline-none border-2 border-[#007FFF] focus:border-[#007FFF] transition-all duration-200 ease-in-out shadow-sm focus:shadow-lg"
          />
          <Button
            type="primary"
            className="mt-4 sm:mt-0 rounded-r-lg bg-[#007FFF] hover:bg-[#005BB5] text-white font-bold px-6 py-3 flex items-center transition-all duration-300"
            size="large"
          >
            Search
          </Button>
        </form>

        {/* Social Media Links */}
        <div className="absolute mt-8 flex flex-col sm:flex-row space-x-6 text-center items-center justify-center gap-4 bg-gray-800 p-4 bg-opacity-75 rounded-lg w-11/12 sm:w-2/3 px-4 bottom-4 left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="text-2xl text-[#1877F2] transition-transform transform hover:scale-110 hover:text-[#0d5bb5]"
          >
            <FacebookOutlined /> <span>Facebook</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#1DA1F2] transition-transform transform hover:scale-110 hover:text-[#1478b5]"
          >
            <TwitterOutlined /> <span>Twitter</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#E4405F] transition-transform transform hover:scale-110 hover:text-[#c32d47]"
          >
            <InstagramOutlined /> <span>Instagram</span>
          </a>
          <a
            href="#"
            className="text-2xl text-[#FF0000] transition-transform transform hover:scale-110 hover:text-[#cc0000]"
          >
            <YoutubeOutlined /> <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
