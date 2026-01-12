import React from "react";
import Button from "./reuseableComponents/Button";
import bigImg from "../assets/AboutImg/bigImg.png";
import smImg1 from "../assets/AboutImg/smImg1.png";
import smImg2 from "../assets/AboutImg/smImg2.png";
import { FaCheck } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <>
      <div className="w-full pt-16 sm:pt-20 lg:pt-28 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* LEFT CONTENT */}
            <div className="w-full lg:max-w-xl">
              <h1 className="font-great text-xl sm:text-2xl text-[#FF9F0D] italic mb-2">
                About us
              </h1>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-[#FF9F0D]">We</span> Create the best foody product
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-white mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
                pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
                dapibus sit eu velit in consequat.
              </p>

              <div className="space-y-4 mb-8">
                <p className="flex items-start gap-3 text-sm sm:text-base text-white">
                  <FaCheck className="mt-1 text-white" />
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>

                <p className="flex items-start gap-3 text-sm sm:text-base text-white">
                  <FaCheck className="mt-1 text-white" />
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                </p>

                <p className="flex items-start gap-3 text-sm sm:text-base text-white">
                  <FaCheck className="mt-1 text-white" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>

              <Button btnText="Read More" />
            </div>

            {/* RIGHT CONTENT (IMAGES) */}
            <div className="w-full lg:max-w-lg flex flex-col items-center">
              <img className="w-full rounded-lg mb-4" src={bigImg} alt="bigimg" />

              <div className="flex gap-4 w-full">
                <img className="w-1/2 rounded-lg" src={smImg1} alt="smImg" />
                <img className="w-1/2 rounded-lg" src={smImg2} alt="smImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
