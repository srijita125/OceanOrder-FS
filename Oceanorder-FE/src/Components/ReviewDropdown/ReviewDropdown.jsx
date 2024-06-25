import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import RatingsReviews from "../RatingsReviews/RatingsReviews";
// import { PiAirplaneLandingBold } from "react-icons/pi";

const ReviewDropdown = () => {
  return (
    <details className="py-1 group mt-5">
    <summary className="flex items-center justify-between border-gray-200  w-full cursor-pointer select-none border  px-1 py-4 text-gray-100 transition duration-300  hover:text-white rounded-md">
      
      <span className="text-black w-full text-sm sm:text-2xl font-medium pl-3 ">
      Ratings & Reviews
      <span className="ml-2 text-white text-lg font-bold px-3  bg-green-700 mr-3 rounded-xl">4.8
        </span> 
        
      </span>

      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
        <FaPlus
          color="#000"
          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 "
          style={{ fontSize: "26px", display: "inline-block" }}
        />

        <FiMinus
          color="#000"
          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
          style={{ fontSize: "26px", display: "inline-block" }}
        />
      </span>
    </summary>
    <div className=" rounded-b-2xl border-x-2 border-b-2 py-2 text-gray-800">
   <RatingsReviews/>
    </div>
  </details>
  )
 }

export default ReviewDropdown;
