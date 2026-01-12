import React from "react";
import img1 from "../assets/whyChoose/img1.png";
import img2 from "../assets/whyChoose/img2.png";
import img3 from "../assets/whyChoose/img3.png";
import img4 from "../assets/whyChoose/img4.png";
import img5 from "../assets/whyChoose/img5.png";
import img6 from "../assets/whyChoose/img6.png";
import SectionTitle from "./reuseableComponents/SectionTitle";
import SectionHead from "./reuseableComponents/SectionHead";
import Wine from "../assets/icons/Wine.png";
import Cookie from "../assets/icons/Cookie.png";
import Hamburger from "../assets/icons/Hamburger.png";
const WhyChooseUs = () => {
  return (
    <div className="w-50 lg:w-330 md:w-305 m-auto py-30 ">
      <div
        className="flex flex-wrap-reverse gap-3 justify-center
                lg:flex-nowrap lg:justify-center lg:gap-33.50 items-center"
      >
        {/* left content */}
        <div>
          <div className="flex flex-wrap items-center mb-2 lg:flex-nowrap lg:gap-4 lg:mb-4">
            <div className="w-87.5 lg:w-90.5 overflow-hidden rounded-md">
              <img className="w-87.5 lg:w-90.5 rounded-md" src={img1} alt="image" />
            </div>

            <div className="w-87.5 lg:w-90.5 overflow-hidden rounded-md mt-4 lg:mt-15">
              <img className="w-full rounded-md" src={img2} alt="image2" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:flex-nowrap lg:gap-4">
            <div className="flex flex-wrap gap-2 lg:flex-nowrap lg:gap-4">
              <div className="w-87.5 lg:w-61">
                <img className="w-full rounded-md" src={img3} alt="img3" />
              </div>

              <div className="w-87.5 lg:w-55.25">
                <img className="w-full rounded-md" src={img4} alt="img4" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mx-auto lg:flex-col lg:gap-4">
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

          <div className="w-87.5 m-auto lg:m-0 lg:w-108.25">
            <SectionHead colorText={"Ex"} simpleText={"ta ordinary taste And Experienced"} />
          </div>

          <p className="w-87.5 m-auto lg:w-131.5 text-white text-base leading-6 my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
            pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
            dapibus sit eu velit in consequat.
          </p>

          {/* icons */}
          <div className="flex justify-center gap-5 lg:justify-start lg:gap-8.25">
            <div>
              <div
                className="w-17.5 lg:w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D]
                        flex justify-center items-center"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14">
                  <img className="w-full h-full" src={Hamburger} alt="icon" />
                </div>
              </div>
              <p className="text-base lg:text-[18px] text-white mt-2.25 text-center">Fast Food</p>
            </div>

            <div>
              <div
                className="w-17.5 lg:w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D]
                        flex justify-center items-center"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14">
                  <img className="w-full h-full" src={Cookie} alt="icon" />
                </div>
              </div>
              <p className="text-base lg:text-[18px] text-white mt-2.25 text-center">Lunch</p>
            </div>

            <div>
              <div
                className="w-17.5 lg:w-25.5 px-5.75 py-5.5 rounded-md bg-[#FF9F0D]
                        flex justify-center items-center"
              >
                <div className="w-10 h-10 lg:w-14 lg:h-14">
                  <img className="w-full h-full" src={Wine} alt="icon" />
                </div>
              </div>
              <p className="text-base lg:text-[18px] text-white mt-2.25 text-center">Dinner</p>
            </div>
          </div>

          {/* experience box */}
          <div className="w-87.5 lg:w-93.5 h-23 flex justify-between bg-white rounded-md mt-8.5">
            <div className="w-1 lg:w-2.5 h-full rounded-md bg-[#FF9F0D]" />

            <div className="flex items-center gap-11.75 pl-10.25 pr-12.75">
              <p className="text-[48px] font-bold text-[#FF9F0D]">30+</p>
              <div>
                <p className="text-[20px] text-[#1E1E1E]">Years of</p>
                <p className="text-2xl font-bold text-[#1E1E1E]">Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
