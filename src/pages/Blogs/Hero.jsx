import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16 text-center lg:py-24">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white lg:text-6xl">
          Welcome to <span className="text-blue-600">Hakim Podcast</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 lg:text-xl">
          Discover engaging conversations, inspiring stories, and the latest
          trends in technology, education, and culture.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search podcasts..."
            className="w-full max-w-md rounded-l-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="rounded-r-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
