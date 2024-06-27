import React, { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Register from "../../assets/Images/Register.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import  Cookies  from "js-cookie";



const Form = ({
  closeModalfun,
  showImmediate,
  setAuthenticated,
  onSuccess,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    userType:"",
  });
  // if(userData.userType === "vendor"){
  //           useNavigate("/profile")
  //         }
  //    else if(userData.userType === "customer"){
  //           useNavigate("/")
  //         }
 
  useEffect(() => {
    if (showImmediate) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setShowModal(true);
        document.body.style.overflow = "hidden";
      }, 2000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, [showImmediate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showSignin) {
      try {
        const response = await fetch("http://localhost:8080/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            
          }),
          
        }

      );
        if (!response.ok) {
          let errorMessage = "Login failed";
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
          }
          throw new Error(errorMessage);
        }
        const data = await response.json();
        console.log(data.data);
        // token from response body
      // set token to the cookie
      Cookies.set("token", data.data);
      // decode token and extract userType from payload
      const tokenValue=Cookies.get("token")
      const decodedToken = JSON.parse(atob(tokenValue?.split('.')[1]));
      const loginUserType = decodedToken.userType;
      // execute conditional navigation
// console.log(loginUserType)
console.log(decodedToken.name);
    
           //conditional navigation..
           if (loginUserType == "customer") {
            navigate("/"); 
          } else if (loginUserType =="vendor") {
            navigate("/profile"); 
          }
       alert("Login successful!");
         
        setShowModal(false);
        if (onSuccess) {
          onSuccess(data); 
        }
      } catch (error) {
        console.error("Error in logging in:", error.message);
        alert("Error in logging in: " + error.message);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/signup', userData);
        console.log('User signed up:', response.data);
        alert('User signed up successfully!');
        
     
        setUserData({
          name: "",
          email: "",
          password: "",
          phone: "",
          userType:""
        });
  //   
        setShowModal(false);
      } catch (error) {
        console.error('Error signing up:', error.response?.data || error.message);
        alert('Error signing up. Please try again.');
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    if (typeof closeModalfun === "function") {
      closeModalfun();
    }
  };

  const toggleSigninMode = () => {
    setShowSignin(!showSignin);
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center">
        {showModal && (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none h-full backdrop-blur-[5px] overflow-y-auto px-2 py-2 ">
              <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-xl ring-1 ring-gray-900/5  mx-4">
                <div className="hidden sm:block">
                  <img
                    src={Register}
                    alt="Register"
                    className="rounded-l-xl sm:h-[500px]"
                  />
                </div>
                <div className="px-5 sm:px-10  sm:mx-auto h-[460px]">
                  <div className="w-full">
                    <div className="pt-3 flex flex-col relative justify-between">
                      <div className="pb-4">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-sky-700">
                          OceanOrder
                        </h3>
                      </div>
                      {showSignin && (
                        <div>
                          {/* <h6 className="text-xl text-center sm:text-2xl lg:text-xl font-semibold text-black">
                           Login 
                          </h6> */}
                        </div>
                      )}
                      {!showSignin && (
                        <div>
                          {/* <h6 className="text-lg lg:text-xl font-semibold text-black text-left">
                            Register Your Account
                          </h6> */}
                        </div>
                      )}
                      <button
                        className="bg-transparent border-0 text-black cursor-pointer absolute top-4 right-0"
                        onClick={closeModal}
                      >
                        <IoCloseCircleSharp
                          color="#000000"
                          style={{ fontSize: "35px" }}
                        />
                      </button>
                    </div>
                    <div className="sm:py-3">
                      {/* {showSignin && (
                        <div className="w-full pt-3 h-[250px]">
                          <img
                            src={Login}
                            alt="Login"
                            loading="lazy"
                            className="rounded-lg sm:h-[250px] sm:w-[100%]"
                          />
                        </div>
                      )} */}
                      {!showSignin && (
                        <>
                          <div className="">
                            <label
                              htmlFor="name"
                              className="text-sm px-1 lg:text-base font-medium mt-4"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="mt-1 w-full border-2 border-slate-400 rounded px-2 py-1 focus:outline-none"
                              value={userData.name}
                              onChange={handleChange}
                              autoComplete="on"
                              required
                            />
                          </div>
                        </>
                      )}
                      <div className="mt-1">
                        <label
                          htmlFor="email"
                          className="text-sm px-1 lg:text-base font-medium"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-1 w-full border-2 border-slate-400 rounded px-2 py-1 focus:outline-none"
                          value={userData.email}
                          onChange={handleChange}
                          autoComplete="on"
                          required
                        />
                      </div>
                      <div className="mt-1">
                        <label
                          htmlFor="password"
                          className="text-sm px-1 lg:text-base font-medium"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="mt-1 w-full border-2 border-slate-400 rounded px-2 py-1 focus:outline-none"
                          value={userData.password}
                          onChange={handleChange}
                          autoComplete="on"
                          required
                        />
                      </div>
                      {!showSignin && (
                        <>
                          <div className="mt-1 mb-4">
                            <label
                              htmlFor="phone"
                              className="text-sm px-1 lg:text-base font-medium"
                            >
                              Contact No.
                            </label>
                            <input
                              type="number"
                              name="phone"
                              id="phone"
                              className="mt-1 w-full border-2 border-slate-400 rounded px-2 py-1 focus:outline-none"
                              value={userData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </>
                      )}
{!showSignin && (
                        <>
<div className="flex mb-4">
                            <div>
                              <input
                                type="radio"
                                id="Customer-radio"
                                name="userType"
                                value="customer"
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="Customer-radio"
                                className="text-sm px-1 lg:text-base font-medium"
                              >
                                Customer
                              </label>
                            </div>
                            <div className="ml-5">
                              <input
                                type="radio"
                                id="Vendor-radio"
                                name="userType"
                                value="vendor"
                                
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="vendor-radio"
                                className="text-sm px-1 lg:text-base font-medium"
                              >
                                Vendor
                              </label>
                            </div>
                          </div> 
                          </>
)}        
      
                      <div className="flex items-center justify-end p-2 rounded-b">
                        <button
                          className="w-1/3 rounded-md bg-slate-400 px-3 py-2 text-white focus:bg-gray-600 focus:outline-none mr-2"
                          type="button"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="w-full rounded-md bg-blue-700 hover:bg-blue-800 px-3 py-2 text-white focus:bg-gray-600 focus:outline-none"
                        >
                          {showSignin ? "Sign In" : "Sign Up"}
                        </button>
                      </div>
                      <p className="text-center text-sm text-gray-500 sm:pb-1">
                        {!showSignin
                          ? "You have already an account?"
                          : "Don't have an account?"}
                        <button
                          className="font-semibold text-blue-950 hover:underline focus:text-gray-800 focus:outline-none"
                          type="button"
                          onClick={toggleSigninMode}
                        >
                          {showSignin ? "Sign up" : "Sign in"}
                        </button>
                      </p>
                    </div>
                    {showSignin && (
                      <div>
                        <p className="text-center text-blue-600">
                          <a href="">Forgot Password?</a>
                        </p>
                        <div className="pt-6 border-b-2"></div>
                        <div className="flex items-center justify-center gap-6 pt-5">
                          <a
                            className="text-gray-700 hover:text-orange-600"
                            aria-label="Visit TrendyMinds LinkedIn"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF style={{ fontSize: "22px" }} />
                          </a>
                          <a
                            className="text-gray-700 hover:text-orange-600"
                            aria-label="Visit TrendyMinds YouTube"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AiFillInstagram style={{ fontSize: "26px" }} />
                          </a>
                          <a
                            className="text-gray-700 hover:text-orange-600"
                            aria-label="Visit TrendyMinds Facebook"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BsYoutube style={{ fontSize: "26px" }} />
                          </a>
                          <a
                            className="text-gray-700 hover:text-orange-600"
                            aria-label="Visit TrendyMinds Instagram"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IoMdMail style={{ fontSize: "26px" }} />
                          </a>
                        </div>
                        <div className="mt-4 sm:mt-6">
                          <h4 className="text-[12px]">
                            By signing in, you agree to our{" "}
                            <span className="text-blue-600">Terms</span> and{" "}
                            <span className="text-blue-600">Privacy Policy</span>{" "}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
