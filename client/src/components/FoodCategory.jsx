import React from "react";
import SectionHead from "./reuseableComponents/SectionHead";
import SectionTitle from "./reuseableComponents/SectionTitle";
import food1 from "../assets/foods/food1.png";
import food2 from "../assets/foods/food2.png";
import food3 from "../assets/foods/food3.png";
import food4 from "../assets/foods/food4.png";
import ProductCard from "./reuseableComponents/ProductCard";
const FoodCategory = () => {
  return (
    <>
      {/* main div */}
      <div className="pt-[120px]">
        <div className="m-auto text-center">
          <SectionTitle title={"Food Category"} />
          <SectionHead colorText={"Ch"} simpleText={"oose Food Iteam"} />
        </div>
        {/* container */}
        <div className="w-330 m-auto mt-[56px] flex items-center gap-8 m-auto">
          {/* card items */}
          <ProductCard img={food1} discount={'Save 30%'} discountTitle={'Fast Food Dish'}/>
          <ProductCard img={food2} discount={'Save 20%'} discountTitle={'Fast Food Dish'} />
          <ProductCard img={food3} discount={'Save 30%'} discountTitle={'Fast Food Dish'}/>
          <ProductCard img={food4} discount={'Save 10%'} discountTitle={'Fast Food Dish'}/>
        </div>
      </div>
    </>
  );
};

export default FoodCategory;
