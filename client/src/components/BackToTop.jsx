import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  // handleShow function
  const handleScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <button
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className={`
    fixed z-50
    bottom-3 right-3
    sm:bottom-5 sm:right-5
    lg:bottom-6 lg:right-6

    w-9 h-9
    sm:w-11 sm:h-11
    lg:w-12 lg:h-12

    rounded-full
    bg-[#FF9F0D] text-white

    flex items-center justify-center
    shadow-lg shadow-[#FF9F0D]/40

    transition-all duration-300 ease-in-out
    ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}

    hover:scale-110 hover:bg-orange-500
    active:scale-95

    focus:outline-none focus:ring-2 focus:ring-white
    focus:ring-offset-2 focus:ring-offset-black

    animate-bounce sm:animate-none
  `}
      >
        <IoIosArrowUp className="text-lg sm:text-xl lg:text-2xl" />
      </button>
    </>
  );
};

export default BackToTop;
