import React from "react";
import { Button, Image } from "antd";
import {
  RightOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import photo7 from "../assets/images/Hero.jpg";

function Header() {
  return (
    <section className="relative w-full h-[600px] md:h-[600px] lg:h-[800px] px-4 ">
      {/* Background Image */}
      <div className="absolute inset-0 ">
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
      <div className=" mx-auto absolute z-10 flex flex-col justify-center  h-full p-6 md:p-12 lg:p-24 text-black  border-2 border-red-500">
        <div className="text-center border-2 border-green-400">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Medical services that you can trust.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black">
            Providing quality care and trusted medical services to help you stay
            healthy.
          </p>
          <Button
            type="primary"
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            size="large"
            icon={<RightOutlined />}
          >
            Discover More
          </Button>
        </div>

        {/* Search Form */}
        {/* Search Form */}
        <form className="flex mt-6 w-full md:w-[80%] lg:w-[60%] justify-center items-center gap-4 pt-6">
          <input
            type="text"
            placeholder="Search any podcast..."
            className="w-full sm:w-[60%] md:w-[70%] lg:w-[400px] p-4 rounded-full text-gray-900 font-semibold placeholder-gray-500 focus:outline-none border-2 border-blue-500 focus:border-blue-600 transition-all duration-200 ease-in-out "
          />
          <Button
            type="primary"
            className="rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 flex items-center"
            size="large"
          >
            <span className="transform transition-transform duration-300 ease-in-out hover:rotate-90">
              <RightOutlined />
            </span>
            Search
          </Button>
        </form>

        {/* Social Media Links */}
        <div className="absolute mt-8 flex space-x-6 text-center items-center justify-center gap-4 bg-gray-400 p-4 bg-opacity-50 rounded-lg w-2/3 px-4 bottom-4 left-1/2 transform -translate-x-1/2">
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
