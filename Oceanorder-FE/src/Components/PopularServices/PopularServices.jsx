import React from "react";
import Carousel from "../Carousel/Carousel";

const PopularServices = ({AllProductData}) => {
  return (
    <>
      <div className="w-[95%] mx-auto mt-3">
        <h4 className="font-semibold text-2xl text-black bg-blue-300 px-4 py-1 rounded-lg">
          Our Popular Services
        </h4>
        <Carousel AllProductData={AllProductData}/>
      </div>
    </>
  );
};

export default PopularServices;
