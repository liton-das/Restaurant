import React, { useState } from "react";
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
import Button from "./reuseableComponents/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const [isClosed,setIsClosed]=useState(false)
  // handle closed menu funciton 
  const handleClosed=()=>{
    setIsClosed(!isClosed)
  }
  return (
    <nav
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerHero})` }}
    >
      {/* Logo */}
      <h1 className="flex justify-center items-center pt-6 sm:pt-10 text-2xl font-bold text-white">
        <span className="text-[#FF9F0D]">Food</span>tuck
      </h1>
      <button onClick={handleClosed} className="lg:hidden text-white text-end absolute top-8 right-7 cursor-pointer">
        <GiHamburgerMenu className="text-2xl" />
      </button>
      {/* mobaile overlay */}
      <div className={
        `
        lg:hidden
         cursor-pointer
          fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-40
          ${isClosed ? 'opacity-100 visible':'opacity-0 invisible'}
        `
      }
      
      >
        {/* mobile menu */}
        <div
          className={
            `
            lg:hidden
            fixed top-0 left-0 w-[87%] h-screen 
            bg-linear-to-br from-slate-900 via-gray-900 to-black
            backdrop-blur-xl z-50 border-r border-white/10
            transform transition-transform duration-300
            ${isClosed ? 'translate-x-0':'-translate-x-full'}
            `}
        >
          <button onClick={handleClosed} className="text-white text-end absolute top-8 right-7">
            <VscChromeClose className="text-2xl"/>
          </button>
          <h1 className="flex justify-center items-center pt-6 sm:pt-10 text-2xl font-bold text-white">
            <span className="text-[#FF9F0D]">Food</span>tuck
          </h1>
          <ul className="flex flex-col justify-center items-center gap-5 text-white mt-12">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((item) => (
              <a key={item} className="cursor-pointer" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </ul>
        </div>
      </div>
      {/* Navbar items*/}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
        {/* Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 text-white text-sm lg:text-base">
          <li>
            <a href="#">Home</a>
          </li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
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
            <span>
              <SlSocialFacebook className="text-white text-[25px] hover:text-[#FF9F0D]" />
            </span>
            <span>
              <CiTwitter className="text-white text-[25px] hover:text-[#FF9F0D]" />
            </span>
            <span>
              <SlSocialInstagram className="text-white text-[25px] hover:text-[#FF9F0D]" />
            </span>
            <div className="w-px h-24 bg-white"></div>
          </div>

          {/* Text */}
          <div className="pt-6.5">
            <h4 className="text-[#FF9F0D] mb-2 text-[32px] font-great font-normal">
              Its Quick & Amusing!
            </h4>

            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
            </h1>

            <p className="text-white mt-6 max-w-md text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum
              neque massa congue
            </p>

            <Button btnText={"See More"} />
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
          <div className="w-full absolute top-[18%] lg:right-[15%] lg:left-3 -left-15">
            <div className="relative">
              <img
                src={leaf}
                className="absolute -top-30 -right-30 w-s-80 sm:w-32 w-[200px] lg:w-62.5"
                alt="leaf"
              />

              <img
                src={Rectangle8926}
                className="absolute lg:-top-12 -top-12 -right-18  sm:w-32 w-[240px] lg:w-95"
                alt="rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
