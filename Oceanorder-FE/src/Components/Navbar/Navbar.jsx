import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import "./Navbar.css";
const Navbar = ({cart}) => {
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isBuyersDropdownOpen, setIsBuyersDropdownOpen] = useState(false);
  const [isCustomersDropdownOpen, setIsCustomersDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsUsersDropdownOpen(false);
    setIsBuyersDropdownOpen(false);
  };
  return (
    <nav className="border-b-[.5px] bg-white border-slate-400 w-full m-auto z-30 sticky top-0 shadow-lg ">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div>
            <Link to={"/"}>
              <div className="flex-shrink-0 flex cursor-pointer items-center">
                <h1 className="text-black ml-1 mr-1 font-bold">OceanOrder</h1>
              </div>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center justify-between gap-4">
            <div className="hidden md:flex items-center">
              <div className="ml-4 flex items-center space-x-6 sm:border-l-2  border-r-2 h-full">
                <div className="relative">
                  <button className="text-black hover:text-[#3e98c7] px-3 py-2 rounded-md text-sm font-medium flex relative">
                    <NavLink to={"/"}>
                      <h6 >Home</h6>
                    </NavLink>
                  </button>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setIsUsersDropdownOpen(true)}
                  onMouseLeave={() => setIsUsersDropdownOpen(false)}
                >
                  <button className="text-black hover:text-[#3e98c7] px-3 py-2 rounded-md text-sm font-medium flex relative">
                    <h6>For Buyers</h6>
                    <svg
                      className="w-4 h-4 absolute right-0 bottom-2 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-4-4h8l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isUsersDropdownOpen && (
                    <div className="origin-top-right absolute top-7 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 bg-white ring-black ring-opacity-5">
                      <NavLink
                        to={"/products"}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                       Products
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Sustainable Trade
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Trade Simple
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Secure Trade Operation
                      </NavLink>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setIsBuyersDropdownOpen(true)}
                  onMouseLeave={() => setIsBuyersDropdownOpen(false)}
                >
                  <button className="text-black hover:text-[#3e98c7] px-3 py-2 rounded-md text-sm font-medium flex relative">
                    <h6>For Suppliers</h6>
                    <svg
                      className="w-4 h-4 absolute right-0 bottom-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-4-4h8l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isBuyersDropdownOpen && (
                    <div className="origin-top-right absolute right-0 top-7 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 bg-white ring-black ring-opacity-5">
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Premium Overview
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Trade
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Advertisement & Promotion
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Brand Owners
                      </NavLink>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setIsCustomersDropdownOpen(true)}
                  onMouseLeave={() => setIsCustomersDropdownOpen(false)}
                >
                  <button className="text-black hover:text-[#3e98c7] px-3 py-2 rounded-md text-sm font-medium flex relative">
                    <h6>Customers</h6>
                    <svg
                      className="w-4 h-4 absolute right-0 bottom-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-4-4h8l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isCustomersDropdownOpen && (
                    <div className="origin-top-right absolute right-0 top-7 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 bg-white ring-black ring-opacity-5">
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Buyers
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Suppliers
                      </NavLink>
                    </div>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <button className="text-black hover:text-[#3e98c7] px-3 py-2 rounded-md text-sm font-medium flex relative mr-1">
                    <h6>About</h6>
                    <svg
                      className="w-4 h-4 absolute right-0 bottom-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12l-4-4h8l-4 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="origin-top-right absolute right-0 top-7 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 bg-white ring-black ring-opacity-5">
                      <NavLink
                        to={"/about"}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        About
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        Careers
                      </NavLink>
                      <NavLink
                        to={""}
                        className="block px-4 py-2 text-sm text-black hover:text-[#3e98c7] hover:bg-gray-100"
                      >
                        The Team
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="sm:flex items-center justify-center gap-5 hidden">
              <div className="">
                <NavLink to={"/cart"}>
                <div className="text-black relative pt-1 hover:text-sky-500">
              <p className="flex absolute top-0 right-0  h-1 w-1 items-center justify-center rounded-full bg-sky-500 p-2 text-xs text-white font-semibold">
                {cart.length}
              </p>
              <IoCartOutline className="text-3xl  transition-all " />
            </div>
                </NavLink>
              </div>
              <div className="hover:text-[#3e98c7] sm:flex items-center justify-center gap-5 hidden">
                <NavLink to={"/profile"}>
                  <FaRegUser
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mr-2 flex items-center justify-center gap-2 sm:hidden">
          <div className="">
                <NavLink to={"/cart"} onClick={handleNavLinkClick}>
                <div className="text-black relative pt-1 hover:text-sky-500">
              <p className="flex absolute top-0 right-0  h-1 w-1 items-center justify-center rounded-full bg-sky-500 p-2 text-xs text-white font-semibold">
                {cart.length}
              </p>
              <IoCartOutline className="text-3xl  transition-all " />
            </div>
                </NavLink>
              </div>
            <div className=" flex items-center justify-center sm:hidden">
              <NavLink to={"/profile"} onClick={handleNavLinkClick}>
              <FaRegUser
                style={{
                  fontSize: "20px",
                }}
              />
              </NavLink>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center  rounded-md text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
         <NavLink to={"/"}  onClick={handleNavLinkClick} ><div  className="text-black hover:text-[#3e98c7] block px-3 py-2 rounded-sm text-base font-medium">home</div></NavLink> 
            <div
              onMouseEnter={() => setIsUsersDropdownOpen(true)}
              onMouseLeave={() => setIsUsersDropdownOpen(false)}
            >
              
              <div className="text-black hover:text-[#3e98c7] block px-3 py-2 rounded-sm text-base font-medium">
                <div className="relative">
                  <h6>For Buyers</h6>
                  <svg
                    className="w-7 h-7 absolute right-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-4-4h8l-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {isUsersDropdownOpen && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded bg-gray-100">
                  <NavLink
                    to={"/products"}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Sustainable Trade
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Trade Simple
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Secure Trade Operation
                  </NavLink>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setIsBuyersDropdownOpen(true)}
              onMouseLeave={() => setIsBuyersDropdownOpen(false)}
            >
              <div className="text-black hover:text-[#3e98c7] block px-3 py-2 rounded-sm text-base font-medium">
                <div className="relative">
                  <h6>For Suppliers</h6>
                  <svg
                    className="w-7 h-7 absolute right-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-4-4h8l-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {isBuyersDropdownOpen && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100">
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Premium Overview
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Trade
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Advertisement & Promotion
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Brand Owners
                  </NavLink>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setIsCustomersDropdownOpen(true)}
              onMouseLeave={() => setIsCustomersDropdownOpen(false)}
            >
              <div className="text-black hover:text-[#3e98c7] block px-3 py-2 rounded-sm text-base font-medium">
                <div className="relative">
                  <h6>Customers</h6>
                  <svg
                    className="w-7 h-7 absolute right-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-4-4h8l-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {isCustomersDropdownOpen && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Buyers
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    Suppliers
                  </NavLink>
         
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <div className="text-black hover:text-[#3e98c7] block px-3 py-2 rounded-sm text-base font-medium">
                <div className="relative">
                  <h6>About</h6>
                  <svg
                    className="w-7 h-7 absolute right-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-4-4h8l-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {isAboutDropdownOpen && (
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink
                    to={"/about"}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                   Careers
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-black block px-3 py-2 rounded-sm text-base font-medium"
                    onClick={handleNavLinkClick}
                  >
                   The Team
                  </NavLink>
         
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
