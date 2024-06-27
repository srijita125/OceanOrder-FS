import React from "react";
import Oceanorder from "../../assets/Images/OceanOrder.png";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const VendorDetails = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/vendor");
  };

  return (
    <>
      <div className="p-4 h-full ">
        <div className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-teal border-4 border-blue-400">
          <div className="py-4 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center">
            <div className="mx-auto">
              <img src={Oceanorder} className="h-20" />
            </div>
            <div>
              <h4 className="text-3xl leading-6 font-medium text-gray-900 lg:max-w-xs lg:mx-auto">
                OCEAN ORDER
              </h4>
            </div>

            <div className="my-10 lg:my-6 flex items-baseline justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-gray-100"></div>

            <div className="rounded-md">
              <button
                className="flex items-center justify-center px-5 py-3 mx-auto font-medium rounded-md focus:outline-none focus:ring transition duration-200 ease-in-out shadow-teal text-blue-400 border-2 border-blue-400 bg-white hover:border-blue-400 hover:shadow-teal-hover hover:bg-blue-400 hover:text-white text-lg"
                type="button"
                onClick={handleProfile}
              >
                View Profile
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div
                className="mt-7 block text-blue-400"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaLocationDot />
                <p className="text-gray-600 font-semibold p-1">10 Countries</p>
              </div>

              <div
                className="mt-7 block text-blue-400"
                style={{ display: "flex", alignItems: "center" }}
              >
                <AiFillProduct />
                <p className="text-gray-600 font-semibold p-1">150+ Products</p>
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-8 lg:flex-shrink-1 dark:bg-gray-900">
            <h3 className="text-2xl text-left leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-gray-100"></h3>
            <p className="mt-6 text-left font-ttnorms leading-8 text-gray-500 text-lg dark:text-gray-400">
              Oceanorder has a decades-long history of providing premium-quality
              footwear, workwear, safety glasses, work gloves and more.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-blue-400 dark:text-teal-300 dark:bg-transparent">
                  What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-700"></div>
              </div>
              <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400 dark:text-teal-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                    Access to premium Products at exclusive price
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400 dark:text-teal-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                    Free Shipping on select products
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400 dark:text-teal-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                    Specialises in Safety Work Boots, Flame Resistant Clothing
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400 dark:text-teal-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left dark:text-gray-300">
                    Dedicated customer support
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDetails;
