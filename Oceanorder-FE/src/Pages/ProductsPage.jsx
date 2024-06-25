import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import { useParams, useNavigate } from "react-router-dom";
import Filter from "../Components/Filter/Filter";
const ProductsPage = ({ AllProductData, addToCart }) => {
  const navigate = useNavigate();
  const products = AllProductData.products;
  const { category } = useParams();
  const { vendor } = useParams();

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchValue, setSearchValue] = useState("");

  //new line start
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const allVendors = [
    ...new Set(products.map((product) => product.vendor)),
  ];
  //line end

  //Search Functionality
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredFun = (value) => {
    const filtered = products.filter((product) => {
      return (
        product.category.toLowerCase() == value.toLowerCase() ||
        product.productName.toLowerCase() == value.toLowerCase()
        
        
      );
    });

    if (filtered.length == 0) {
      navigate(`/products`);
      setFilteredProducts(products);
      alert("Product Not Found");
    } else {
      navigate(`/products/${filtered[0].category}`);
      setFilteredProducts(filtered);
    }
  };
  // filter functionality
  useEffect(() => {
    const filtered = AllProductData.products.filter((product) => {
      return product.category == category;
    });
    setFilteredProducts(filtered);
  }, [category]);

  useEffect(() => {
    const filtered = AllProductData.products.filter((product) => {
      return product.vendor == vendor;
    });
    setFilteredProducts(filtered);
  }, [vendor]);




  if (filteredProducts.length == 0) {
    setFilteredProducts(products);
  }
  // same filter functionality for responsive (1)
  const allProducts = () => {
    setFilteredProducts(products);
    navigate("/products");
  };



  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <div className=" lg:w-[25%] hidden sm:block">
        <div className=" p-4 border-r border-gray-200 sticky top-16 h-screen">
          <div className="mb-4">
            <label htmlFor="search" className="block text-sm font-medium ">
              Search
            </label>
            <div className="mt-1">
              <label
                className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  value={searchValue}
                  onChange={handleSearchChange}
                  id="search-bar"
                  placeholder="your keyword here"
                  className="px-3 py-1 w-full rounded-md flex-1 outline-none bg-white"
                />
                <button
                  onClick={() => {
                    filteredFun(searchValue);
                  }}
                  className="w-full  px-6 py-1 bg-blue-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
                >
                  <div className="relative">
                    <div className="flex items-center transition-all opacity-1 valid">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Search
                      </span>
                    </div>
                  </div>
                </button>
              </label>
            </div>
          </div>
          <Filter setFilteredProducts={setFilteredProducts} />
        </div>
      </div>
      {/* for mobile device */}
      <div className="block sm:hidden ">
        <div className="gap-2">
          <div>
            <div className="flex my-1 justify-center mt-3">
              <input
                value={searchValue}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search product /category"
                className="w-full px-3 h-10 rounded-l-full ml-1 border-2 focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={() => {
                  filteredFun(searchValue);
                }}
                className="bg-sky-500 text-white mr-2 px-2 md:px-3 py-0 md:py-1 rounded-r-full"
              >
                Search
              </button>
            </div>
          </div>
          <select
            className="W-full h-7 border border-gray-500 focus:outline-none focus:border-black mx-2 bg-gray-100 rounded-full px-1 tracking-wider"
            onChange={(e) => navigate(`/products${e.target.value}`)}
          >
            <option value="" onClick={allProducts}>
              All
            </option>
            {uniqueCategories.map((category) => (
              <option key={category} value={`/${category}`}>
                {category}
              </option>  
            ))}
          </select>

          <select
            className="W-full h-7 border border-gray-500 focus:outline-none focus:border-black mx-2 bg-gray-100 rounded-full px-1 tracking-wider"
            onChange={(e) => navigate(`/products${e.target.value}`)}
          >
            <option value="" onClick={allProducts}>
              All
            </option>
            {uniqueCategories.map((vendor) => (
              <option key={vendor} value={`/${vendor}`}>
                {vendor}
              </option>  
            ))}
          </select>


          
        </div>
      </div>
      <div className="md:w-[75%]">
        <ul className="grid grid-cols-1 gap-y-3 gap-x-1 items-start p-3 w-full">
          {filteredProducts.map((item, index) => {
            return (
              <ProductCard
                key={index}
                singleData={item}
                id={item.id}
                img={item.imageSrc}
                addToCart={addToCart} //add to cart function
                category={item.category}
                price={item.price}
                productName={item.productName}
                vendor={item.vendor}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPage;
