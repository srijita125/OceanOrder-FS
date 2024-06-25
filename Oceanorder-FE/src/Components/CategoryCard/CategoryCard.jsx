import React from "react";
import { NavLink } from "react-router-dom";
const CategoryCard = ({id, productName, imageSrc, category }) => {

  return (
    <>
    <NavLink to={`/products/${category}`}>
      <article className="mx-1 relative hover:cursor-pointer isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20  group">
        <img
          src={imageSrc}
          alt="productImage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h4 className="z-10 mt-3 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-sky-500">
         {category}
        </h4>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {category}
        </div>
      </article>
      </NavLink>
    </>
  );
};

export default CategoryCard;
