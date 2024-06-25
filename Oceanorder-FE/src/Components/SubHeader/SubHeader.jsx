import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
const SubHeader = () => {
  return (
    <div className="h-6 bg-sky-200 border-b-2 ">
      <div className=" w-[95%] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <p>
            <span className="font-semibold">email:</span> shipspare@gmail.com
          </p>
          <hr />
          <p>
            <span className="font-semibold">ph:</span>+91-98323829
          </p>
        </div>

        <div className="hidden sm:flex items-center justify-between gap-5 text-white">
          <div className="cursor-pointer">
            <FaInstagram />
          </div>
          <div className="cursor-pointer">
            <FaFacebook />
          </div>
          <div className="cursor-pointer">
            <IoLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
