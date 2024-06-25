import React, { useState } from "react";
import { AllProductData } from "../../../AllProductData";
import { NavLink,  useNavigate } from "react-router-dom";
const Filter = ({ setFilteredProducts}) => {

  const products = AllProductData.products;
  
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const allVendors = [...new Set(products.map(product => product.vendor))];
  const navigate = useNavigate();
    const allProducts=()=>{
      setFilteredProducts(products)
      navigate("/products");
  }
  return (
    <>
    <div className="mb-4 border-b-4">
      <h3 className="text-sm font-medium text-gray-700 border-b-2 pb-2 ">Categories</h3>

      <div className="mt-2">
        <button onClick={allProducts} className="border-b w-full text-start mb-2 hover:text-blue-300">All</button>
        {uniqueCategories.map((category) => {
          return (
            <NavLink to={`/products/${category}`} key={category}>
              <div className="flex items-center hover:text-blue-400 font-semibold">
                  {category}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>


<div className="mb-4">
<h3 className="text-sm font-medium text-gray-700 border-b-2 pb-2 ">Vendors</h3>
<div className="mt-2">
<button onClick={allProducts} className="border-b w-full text-start mb-2 hover:text-blue-300">All</button>
        {allVendors.map((vendor) => {
          return (
            <NavLink to={`/products/${vendor}`} key={vendor}>
              <div className="flex items-center hover:text-blue-400 font-semibold">
                  {vendor}
              </div>
            </NavLink>
          );
        })}
      </div>
</div>

</>

  );
};
export default Filter;
