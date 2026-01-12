import React from "react";
import img1 from "../assets/whyChoose/img1.png";
import img2 from "../assets/whyChoose/img2.png";
import img3 from "../assets/whyChoose/img3.png";
import img4 from "../assets/whyChoose/img4.png";
import img5 from "../assets/whyChoose/img5.png";
import img6 from "../assets/whyChoose/img6.png";
import SectionTitle from "./reuseableComponents/SectionTitle";
import SectionHead from "./reuseableComponents/SectionHead";
import Wine from '../assets/icons/Wine.png'
import Cookie from '../assets/icons/Cookie.png'
import Hamburger from '../assets/icons/Hamburger.png'
const WhyChooseUs = () => {
  return (
    <>
      <div className="w-330 m-auto pt-30 flex items-center gap-34">
        {/* left content */}
        <div>
          <div className="flex gap-4 mb-4">
            <div className="w-90.5 overflow-hidden rounded-md">
              <img className="w-full rounded-md" src={img1} alt="image" />
            </div>
            <div className="w-70.25 overflow-hidden rounded-md mt-30">
              <img className="w-full rounded-md" src={img2} alt="image2" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <div className="w-61">
                <img className="w-full rounded-md" src={img3} alt="img3" />
              </div>
              <div className="w-55.25">
                <img className="w-full rounded-md" src={img4} alt="img4" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-40.25 overflow-hidden">
                <img className="w-full rounded-md" src={img5} alt="img5" />
              </div>
              <div className="w-40.25 overflow-hidden">
                <img className="w-full rounded-md" src={img6} alt="img6" />
              </div>
            </div>
          </div>
        </div>
        {/* right content */}
        <div>
          <SectionTitle title={"Why Choose us"} />
          <div className="w-108.25">
            <SectionHead colorText={"Ex"} simpleText={"ta ordinary taste And Experienced"} />
          </div>
          <p className="w-131.5 text-white text-base leading-6 my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
            pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
            dapibus sit eu velit in consequat.
          </p>
          <div className="flex items-center gap-8.25">
            <div>
              <p className="w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D] flex justify-center items-center">
                <div className="w-14 h-14">
                  <img className="w-full" src={Hamburger} alt="icon" />
                </div>
              </p>
              <p className="text-[18px] text-white mt-2.25 text-center">Fast Food</p>
            </div>
            <div>
              <p className="w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D] flex justify-center items-center">
                <div className="w-14 h-14">
                  <img className="w-full" src={Cookie} alt="icon" />
                </div>
              </p>
              <p className="text-[18px] text-white mt-2.25 text-center">Lunch</p>
            </div>
            <div>
                <p className="w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D] flex justify-center items-center">
                <div className="w-14 h-14">
                    <img className="w-full" src={Wine} alt="icon" />
                </div>
                </p>
              <p className="text-[18px] text-white mt-2.25 text-center">Dinner</p>
            </div>
          </div>
          <div className="w-93.5 h-23 flex justify-between bg-white rounded-md mt-8.5">
            <div className="w-2.5 h-full rounded-md bg-[#FF9F0D]"></div>
            <div className="flex justify-center items-center gap-11.75 pl-10.25 pr-12.75">
                <p className="text-[48px] font-bold text-[#FF9F0D]">30+</p>
                <div>
                    <p className="text-[20px] text-[#1E1E1E]">Years of</p>
                    <p className="text-2xl font-bold text-[#1E1E1E]">Experienced</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
