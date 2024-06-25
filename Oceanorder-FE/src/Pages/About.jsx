import React from "react";
import AboutImg from "../assets/Images/AboutImg.jpg";
import WorkDetails from "../Components/WorkDetails/WorkDetails";

const About = () => {
  return (
    <>
      <div className=" relative bg-gradient-to-r from-blue-50 to-yellow-50">
        <div
          className="bg-cover  text-center overflow-hidden "
          style={{
            minHeight: "400px",
            backgroundImage: `url(${AboutImg})`, // Use the imported image here
          }}
        ></div>
        <div className="max-w-6xl mx-auto ">
          <div className="mt-3 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 relative top-0 -mt-32 p-5 sm:p-7 rounded-2xl">
              <h4 className="border-b-2 font-semibold mb-3 text-2xl pb-2 bg-blue-600 rounded-xl pl-3 item-center  text-white text-center">
                {" "}
                About Us :-
              </h4>
              <h4 className="text-gray-900 font-bold text-3xl mb-2">
                We are Oceanorder.....
              </h4>

              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h3 className="text-2xl font-bold my-5">
                #1. What is Lorem Ipsum?
              </h3>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </blockquote>
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                <a href="#">#Election</a>, <a href="#">#people</a>,{" "}
                <a href="#">#Election2020</a>, <a href="#">#trump</a>,
                <a href="#">#Joe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WorkDetails />
      </div>
    </>
  );
};

export default About;
