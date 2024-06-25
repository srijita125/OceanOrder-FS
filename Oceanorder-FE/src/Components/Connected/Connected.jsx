import React from "react";
import Buyer from "../../assets/Images/Buyer.svg";
import supplier from "../../assets/Images/Supplier.svg";

const Connected = () => {
  return (
    <>
      <div className="mb-10 border shadow-xl py-5">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-3xl font-bold text-center">Buyers & Suppliers connected</h5>
          <p className="text-center text-gray-500 text-xl py-5 ">
            Rocureship is an online marketplace where long-lasting partnerships{" "}
            <br /> between shipping companies and ship suppliers are established
            and maintained.
          </p>
        </div>
        <div className="w-[70%] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-20 justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={Buyer} alt="" className="h-[100px] object-cover" />
              </div>
              <h5 className="pb-3 text-2xl font-bold">Buyer</h5>
              <p className="text-center text-md text-gray-500 text-[16px] pb-5">
                Trustworthy Shipowners and Ship Managers integrate with
                Procureship to connect seamlessly br with registered suppliers.
              </p>
              <div>
                <a
                  href=""
                  class="flex items-center bg-indigo-600 hover:bg-indigo-500 transition-all text-white border border-indigo-600 py-2 px-6 gap-2 rounded  "
                >
                  <span>View More</span>
                  <svg
                    class="w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-2"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={supplier} alt="" className="h-[100px] " />
              </div>
              <h5 className="pb-3 text-2xl font-bold">supplier</h5>
              <p className="text-center text-md text-gray-500 text-[16px] pb-5">
                Quality Suppliers and Marine Providers register on Procureship
                to increase their exposure and build beneficial synergies.
              </p>
              <div>
                <a
                  href=""
                  class="flex bg-indigo-600 hover:bg-indigo-500 transition-all items-center text-white border  border-indigo-600 py-2 px-6 gap-2 rounded  "
                >
                  <span>View More</span>
                  <svg
                    class="w-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-2"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connected;
