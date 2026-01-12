import React from "react";

const ProductCard = ({ img, discount, discountTitle }) => {
  return (
    <>
      <div className="lg:w-76.25 w-[280px]  rounded-md overflow-hidden relative group cursor-pointer">
        <img className="w-full rounded-md" src={img} alt="foodImg" />

        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          {/* White badge */}
          <p
            className="
                          absolute -left-full
                          group-hover:left-[20%]
                          transition-all duration-500
                          w-31.25 px-4.75 py-1.75
                          rounded-md flex justify-center items-center
                          text-[#FF9F0D] bg-white
                          text-[18px] font-bold
                      "
          >
            {discount}
          </p>

          {/* Orange badge */}
          <p
            className="
                      absolute top-10 -left-full
                      group-hover:left-[20%]
                      transition-all duration-500 delay-100
                      w-51.5 px-7.75 py-2.25
                      rounded-md flex justify-center items-center
                      bg-[#FF9F0D] text-white
                      text-[20px] font-bold
                      mt-2.75
                  "
          >
            {discountTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
