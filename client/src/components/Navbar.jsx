import React from "react";
import { CiSearch } from "react-icons/ci";
import bannerHero from "../assets/bannerHero.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Rectangle8926 from "../assets/Rectangle8926.png";
import leaf from "../assets/leaf.png";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
const Navbar = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerHero})` }}
    >
      {/* Logo */}
      <h1 className="flex justify-center items-center pt-6 sm:pt-10 text-2xl font-bold text-white">
        <span className="text-[#FF9F0D]">Food</span>tuck
      </h1>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
        {/* Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 text-white text-sm lg:text-base">
          <li>Home</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>

        {/* Search */}
        <div className="w-full sm:w-72 px-4 py-2 border border-[#FF9F0D] flex items-center gap-2 rounded-full">
          <input
            className="bg-transparent outline-none text-white w-full"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className="text-xl text-white" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="flex gap-6 items-start">
          {/* Social Icons */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-px h-24 bg-white"></div>
            <span><SlSocialFacebook className="text-white text-[25px] hover:text-[#FF9F0D]"/></span>
            <span><CiTwitter className="text-white text-[25px] hover:text-[#FF9F0D]"/></span>
            <span><SlSocialInstagram className="text-white text-[25px] hover:text-[#FF9F0D]"/></span>
            <div className="w-px h-24 bg-white"></div>
          </div>

          {/* Text */}
          <div>
            <h4 className="text-[#FF9F0D] mb-2">Its Quick & Amusing!</h4>

            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
            </h1>

            <p className="text-white mt-6 max-w-md text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum
              neque massa congue
            </p>

            <button className="mt-6 bg-[#FF9F0D] text-white px-10 py-3 rounded-full hover:scale-105 transition">
              See More
            </button>
          </div>
        </div>

        {/* Right Content (Rotating Images) */}
        <div className="relative flex justify-center items-center">
          <div
            className="
        relative rounded-full border border-white
        w-64 h-64
        sm:w-72 sm:h-72
        md:w-96 md:h-96
        animate-[spin_10s_linear_infinite]
      "
          >
            {/* Image 1 */}
            <div className="absolute top-[8%] left-4 -translate-x-5 w-14 sm:w-16 md:w-20">
              <img src={img1} alt="img1" className="w-full" />
            </div>

            {/* Image 2 */}
            <div className="absolute top-1/2 left-[-8%] -translate-y-1/2 w-12 sm:w-14 md:w-16">
              <img src={img2} alt="img2" className="w-full" />
            </div>

            {/* Image 3 */}
            <div className="absolute bottom-[8%] left-[7%] w-12 sm:w-14 md:w-16">
              <img src={img3} alt="img3" className="w-full" />
            </div>
          </div>
          {/* Decorations */}
          <div className="w-full absolute top-[18%] right-[8%]">
            <div className="relative">
              <img src={leaf} className="absolute -top-30 -right-30 w-s-80 sm:w-32 md:w-62.5" alt="leaf" />

              <img
                src={Rectangle8926}
                className="absolute -top-12 -right-18 w-87.5 sm:w-32 md:w-95"
                alt="rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
