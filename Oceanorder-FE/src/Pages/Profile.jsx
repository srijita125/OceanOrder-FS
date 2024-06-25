import React, { useState } from "react";
import Personalinformation from "../Components/Personalinformation/Personalinformation";
import OrderDetails from "../Components/OrderDetails/OrderDetails";
import user from "../assets/Images/user.png"

const Profile = () => {
  const [activeView, setActiveView] = useState("PersonalInfo");

  const handleMenuClick = (id) => {
    setActiveView(id);
  };
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("User logged out");
    } else {
      console.log("Logout cancelled");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">

          <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col md:flex-row">
            <div className="flex flex-col md:pr-4 w-full sm:w-[20%]">
              <div className="sticky top-20">
                <img
                  className="rounded-full h-24 w-24 mb-4 border-2"
                  src={user}
                  alt="Profile"
                />
                <h2 className="text-lg font-bold">Hii !! Username</h2>

                <nav className="mt-8">
                  <ul className="font-semibold">
                    <li
                      className="mb-2 cursor-pointer hover:text-blue-400 transition duration-200"
                      onClick={() => handleMenuClick("PersonalInfo")}
                    >
                      Personal Info
                    </li>
                    <li
                      className="mb-2 cursor-pointer hover:text-blue-400 transition duration-200"
                      onClick={() => handleMenuClick("MyOrders")}
                    >
                      My orders
                    </li>
                    <li
                      className="mb-2 cursor-pointer hover:text-blue-400 transition duration-200"
                      onClick={() => handleMenuClick("Addresses")}
                    >
                      Addresses
                    </li>
                    <li className="mb-2 cursor-pointer text-red-500 hover:text-red-700 transition duration-200 "
                    onClick={handleLogout}>              
                        Sign Out
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="w-full sm:w-[80%] ">
              <div className="bg-white p-6 border rounded-lg shadow-lg  ">
                {activeView === "PersonalInfo" && <Personalinformation />}
                {activeView === "MyOrders" && <OrderDetails />}      
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;