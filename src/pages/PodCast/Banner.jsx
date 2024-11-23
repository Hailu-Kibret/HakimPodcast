import React from "react";
import { Image } from "antd";
import { Podcast } from "../../assets/images";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="object-cover">
        <Image
          className="bg-red"
          src={Podcast} // Replace with your image URL
          preview={false}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Banner;
