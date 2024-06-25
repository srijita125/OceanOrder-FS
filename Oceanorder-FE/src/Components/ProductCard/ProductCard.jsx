import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({
  img,
  id,
  category,
  price,
  productName,
  addToCart,
  singleData,
  vendor,
  url,
}) => {
  return (
   
    <li className=" border w-full flex flex-col md:flex-row items-start sm:items-center shadow-md p-3 bg-gray-100 rounded-xl ">
      <div className="order-1">
        <h3 className="mb-1 text-slate-900 font-semibold">
          <span className="mb-1 block text-sm leading-6 text-indigo-500">
            By-{vendor}
          </span>
          {productName}
        </h3>
        <div className="prose prose-slate prose-sm  text-blue-400">
          <p className="font-semibold">price- ₹{price}</p>
        </div>
        <button
          className=" inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-1 bg-sky-400 text-slate-700 hover:bg-sky-300 hover:text-slate-900 focus:ring-slate-400 mt-2 mr-2"
          onClick={() => {
            addToCart(singleData);
          }}
          content={"Add to cart"}
        >
          Add To Cart
          <svg
            className="overflow-visible ml-3 text-black group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </button>
        <NavLink to={`/products/${category}/${id}`}>
        <div
          className=" inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-2"
       
        >
          Details
          <svg
            className="overflow-visible ml-3 text-gray-500 group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </div>
        </NavLink>

      </div>
      <img
        src={img}
        alt="ProductImage"
        className="mb-2 shadow-md rounded-lg bg-slate-50 w-full sm:w-[10rem] sm:mb-0 md:mr-6"
      />
    </li>
   
  );
};

export default ProductCard;
