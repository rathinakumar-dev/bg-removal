import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 ">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-neutral-700 leading-tight mb-4">
            Remove the <br />
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              Background
            </span>{" "}
            from
            <br /> images for free
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 font-medium mb-6 max-w-md">
            Our AI-powered tool makes it easy to remove backgrounds from your
            images in just a few clicks.
          </p>

          <div>
            <input type="file" id="upload1" hidden />
            <label
              htmlFor="upload1"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-fuchsia-500 shadow-lg"
            >
              <img src={assets.upload_btn_icon} alt="Upload Icon" width={20} />
              <p className="text-white text-sm ">Upload Image</p>
            </label>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={assets.header_img}
            alt="Header Visual"
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
