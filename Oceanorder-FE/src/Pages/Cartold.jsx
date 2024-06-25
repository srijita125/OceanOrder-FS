import React from "react";
import { useState, useEffect } from "react";
import Emptycart from "../assets/Images/Emptycart.png";
const Cart = ({ cart, deleteFromCart }) => {
  const [counters, setCounters] = useState({});
  const [amounts, setAmounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Initialize counters and amounts based on the cart items
    const initialCounters = {};
    const initialAmounts = {};
    cart.forEach((item) => {
      initialCounters[item.id] = 1;
      initialAmounts[item.id] = item.price;
    });
    setCounters(initialCounters);
    setAmounts(initialAmounts);
  }, [cart]);

  useEffect(() => {
    // Calculate total price when amounts change
    let total = 0;
    Object.values(amounts).forEach((amount) => {
      total += amount;
    });
    setTotalPrice(total);
  }, [amounts]);

  const increment = (id, price) => {
    setCounters({ ...counters, [id]: counters[id] + 1 });
    setAmounts({ ...amounts, [id]: (counters[id] + 1) * price });
  };

  const decrement = (id, price) => {
    if (counters[id] > 1) {
      setCounters({ ...counters, [id]: counters[id] - 1 });
      setAmounts({ ...amounts, [id]: (counters[id] - 1) * price });
    }
  };

  return cart.length > 0 ? (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-[60%]">
              {cart.map((item) => {
                return (
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                      <thead >
                        <tr>
                          <th className="text-left font-semibold">Product</th>
                          <th className="text-left font-semibold">Price</th>
                          <th className="text-left font-semibold">Quantity</th>
                          <th className="text-left font-semibold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={item.imageSrc}
                                alt="Product"
                              />
                              <span className="font-semibold">
                                {item.productName}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">{item.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                onClick={() => {
                                  decrement(item.id, item.price);
                                }}
                                className="border rounded-full py-2 px-4 mr-2"
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {counters[item.id]}
                              </span>
                              <button
                                onClick={() => {
                                  increment(item.id, item.price);
                                }}
                                className="border rounded-full py-2 px-4 ml-2"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4">₹{amounts[item.id]}</td>
                     
                   
                          <button onClick={() => {
                              deleteFromCart(item.id);
                            }} class="btn relative">
                            <svg
                              viewBox="0 0 15 17.5"
                              height="17.5"
                              width="15"
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon transform scale-120 transition duration-200 hover:scale-150"
                            >
                              <path
                                transform="translate(-2.5 -1.25)"
                                d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                                id="Fill"
                              ></path>
                            </svg>
                            <span class="absolute left-1/2 transform -translate-x-1/2 top-0 bg-red-600 px-2 py-1 rounded text-white text-xs uppercase transition-opacity opacity-0 delay-200 duration-200 hover:opacity-100 hover:visible">
                              delete
                            </span>
                          </button>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
            <div className=" md:w-[40%]">
              <div className="bg-white sticky top-20 rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold"> ₹{totalPrice}</span>
                </div>
                <button
                 
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    checkout
                  </span>
                  <span class="relative invisible">Button Text</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center">
      <img
        src={Emptycart}
        alt=""
        className="h-[400px] w-auto text-center object-cover"
      />
    </div>
  );
};

export default Cart;
