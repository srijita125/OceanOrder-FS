import React from 'react';
import oceanorderprofile from "../assets/Images/oceanordercover.jpg";
import Oceanorder from "../assets/Images/stop logo 240x240.png";


const Vendor = () => {
  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img
            src={oceanorderprofile}
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
          />
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img
              src={Oceanorder}
              alt="User Profile"
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
            />
            <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              Ocean Order
            </h1>
          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic eligendi vitae animi nam in, est earum culpa illum aliquam.
            </p>
            <div className="w-full  py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-5 justify-between">
                <div className="w-full border-2  p-4 mt-5">
                <p className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col ">
                      <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Location</p>
                      <p className="text-lg font-semibold">USA</p>
                    </div>
                    <div className="flex flex-col pt-3">
                      <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</p>
                      <p className="text-lg font-semibold">(+91)2519136530</p>
                    </div>
                    <div className="flex flex-col pt-3">
                      <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</p>
                      <p className="text-lg font-semibold">oceanorder@gmail.com</p>
                    </div>
                    <div className="flex flex-col pt-3">
                      <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Website</p>
                      <p className="text-lg font-semibold">https://www.oceanorder.com</p>
                    </div>
                  </p>
                </div>
                <div className="w-full">
                 
                <h1 className="w-fit font-serif mb-2 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-2xl md:text-3xl xs:text-xl">
                  My Location
                </h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                  className="rounded-lg w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
              </div>
            </div>
            
           <div className='my-5'>
            <h4 className='text-3xl'>Products</h4>
           </div>
              
            
            </div>
          </div>

      </section>
    </>
  );
};

export default Vendor;
