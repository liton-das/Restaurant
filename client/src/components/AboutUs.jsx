import React from "react";
import Button from "./reuseableComponents/Button";
import bigImg from "../assets/AboutImg/bigImg.png"
import smImg1 from "../assets/AboutImg/smImg1.png"
import smImg2 from "../assets/AboutImg/smImg2.png"
import { FaCheck } from "react-icons/fa6";
import SectionHead from "./reuseableComponents/SectionHead";
import SectionTitle from "./reuseableComponents/SectionTitle";
const AboutUs = () => {
  return (
    <>
      <div className="w-330 flex justify-center items-center pt-[120px] m-auto">
        <div className="flex  gap-[98px]">
          {/* left content */}
          <div>
            <SectionTitle title={'About us'}/>
            <div className="w-[446px] text-[48px] font-bold text-white mb-8"><SectionHead colorText={'We'} simpleText={'Create the best foody product'}/> </div>
            <p className="w-[526px] text-base leading-6 text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
              bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
              pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
              dapibus sit eu velit in consequat.
            </p>
            <div>
                <p className="flex items-center gap-2.5 text-[18px] text-white mb-6"><span><FaCheck className="text-white text-[17px]"/></span> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <p className="flex items-center gap-2.5 text-[18px] text-white mb-6"><span><FaCheck className="text-white text-[17px]"/></span> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
                <p className="flex items-center gap-2.5 text-[18px] text-white"><span><FaCheck className="text-white text-[17px]"/></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <Button btnText={'Read More'}/>
          </div>
          {/* right content */}
          <div className="w-165 flex flex-col items-center ">
            <img className="w-full mb-4 rounded-md" src={bigImg} alt="bigimg" />
            <div className="flex items-center gap-4">
                <img className="w-80.5 rounded-md" src={smImg1} alt="smImg" />
                <img className="w-80.5 rounded-md" src={smImg2} alt="smImg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
