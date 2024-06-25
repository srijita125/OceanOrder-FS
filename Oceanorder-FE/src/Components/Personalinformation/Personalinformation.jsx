import React from "react";



const Personalinformation = () => {
  return (
    <>
    <div>
    
      <div>
        <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form>
          <div className="mb-4  item-center justify-between flex">
            <div className="w-full">
            <label className="block text-gray-700">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border rounded-md "
              defaultValue="Denis"
            />
            </div>
            
          </div>
          <div className="mb-4  item-center justify-between flex">
            <div className="w-full">
            <label className="block text-gray-700">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-2 border rounded-md "
              defaultValue="Denis"
            />
            </div>
           
          </div>
          <div className="mb-4  item-center justify-between flex">
            <div className="w-full">
            <label className="block text-gray-700">Email </label>
            <input
              type="email"
              placeholder="First name"
              className="w-full px-4 py-2 border rounded-md "
              defaultValue="Denis"
            />
            </div>
           
          </div>
          <div className="mb-4  item-center justify-between flex">
            <div className="w-full">
            <label className="block text-gray-700">Phone</label>
            <input
              type="number"
              placeholder="Number"
              className="w-full px-4 py-2 border rounded-md "
              defaultValue="Denis"
            />
            </div>
            
          </div>
        
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex">
              <div className="mr-4">
                <input type="radio" id="male" name="gender" className="mr-2" />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2"> <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-5 rounded-md"
            >
              Update
            </button>
            </div>
           
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
     
    </>
  );
};

export default Personalinformation;
