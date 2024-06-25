import React, { useState, useEffect } from "react";
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import ReviewDropdown from "../Components/ReviewDropdown/ReviewDropdown";
const ProductDetails = ({ AllProductData, addToCart }) => {
  const { id } = useParams();

  const [filteredProducts, SetFilteredProducts] = useState({});

  useEffect(() => {
    const filteredProducts = AllProductData.products.filter(
      (item) => item.id == id
    );
    SetFilteredProducts(filteredProducts[0]);
  }, [id]);

  const relatedProducts = AllProductData.products.filter(
    (product) =>
      product.category === filteredProducts.category && product.id != id
  );
  console.log(relatedProducts);

  return (
    <>
      <div className="bg-gray-100 py-6 rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 gap-2 justify-between">
            <div className="h-full px-2 sm:px-0 items-center md:sticky md:top-20">
              <div className="w-full rounded-lg border">
                <img
                  className="w-full h-[400px] object-cover rounded-xl"
                  src={filteredProducts.imageSrc}
                  alt="ProductImage"
                />
              </div>
              <div className="py-2 ">
                <button
                  onClick={() => addToCart(filteredProducts)}
                  className="CartBtn relative flex items-center justify-center w-full h-12 rounded-lg border-none bg-yellow-400 shadow-md overflow-hidden cursor-pointer transform-gpu hover:scale-95 transition-transform duration-500"
                >
                  <span className="IconContainer absolute left-0 w-8 h-8 bg-transparent rounded-full flex items-center justify-center overflow-hidden transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cart h-6 w-6 fill-current"
                      viewBox="0 0 576 512"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p className="text flex items-center justify-center text-black transition-transform duration-500">
                    Add to Cart
                  </p>
                </button>
              </div>
            </div>
            <div className="md:w-[60%] md:flex-1 px-4 py-5 bg-gray-50 rounded-2xl shadow-xl border">
              <h2 className="text-2xl font-bold text-gray-800  mb-2 border-b-2 pb-2">
                {filteredProducts.productName}
              </h2>
              <p className="text-gray-600  text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex flex-col mb-4">
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-0.5">
                    <IoIosStar className="w-5 h-5 fill-primary text-yellow-500" />
                    <IoIosStar className="w-5 h-5 fill-primary  text-yellow-500" />
                    <IoIosStar className="w-5 h-5 fill-primary  text-yellow-500" />
                    <IoIosStarHalf className="w-5 h-5 fill-muted stroke-muted-foreground  text-yellow-500" />
                    <IoIosStarOutline className="w-5 h-5 fill-muted stroke-muted-foreground  text-yellow-500" />
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    (42 reviews)
                  </span>
                </div>
                <div className="mr-4 my-2">
                  <span className="font-bold text-gray-700 text-2xl ">
                    Price:
                  </span>
                  <span className="text-blue-400 text-2xl font-semibold">
                    ₹ {filteredProducts.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-green-600 font-semibold">In Stock</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600  text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
              <ReviewDropdown />

              {relatedProducts.length > 0 && (
                <div className="mt-5 border shadow-lg p-2 rounded-lg">
                  <h5 className="text-2xl font-bold">Related Products </h5>
                  <div className=" mt-5 flex gap-1 flex-col sm:flex-row">
                    {relatedProducts.map((product) => (
                      <div className="sm:w-[190px]  relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <Link
                          to={`/products/${product.category}/${product.id}`}
                        >
                          <div className=" border relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <img
                              src={product.imageSrc}
                              alt="productImage"
                              className="object-fill sm:h-[140px] w-full"
                            />
                            <div className="bg-gray-200 p-2 ">
                              <h3 className="font-bold text-xl">
                                {product.productName}
                              </h3>
                              <p className="font-semibold text-lg">
                                {" "}
                                ₹{product.price}
                              </p>
                              {/* <button
                                variant="outline"
                                className=" flex bg-gray-300 hover:bg-gray-100 rounded-lg p-2 w-full transition-colors mt-4"
                              >
                                <FaCartShopping className="w-5 h-5 mr-2" />
                                Add to Cart
                              </button> */}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
