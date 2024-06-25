import React from "react";

const OrderDetails = () => {
  return (
    <div className=" sm:p-4 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Order Details</h2>
      </div>

      <div className="bg-gray-100 rounded-lg shadow overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="">
            <tr className="bg-blue-200 ">
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Product Code</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-200 ">
              <td className="px-4 py-2 whitespace-nowrap">order name</td>
              <td className="px-4 py-2 whitespace-nowrap">order code</td>
              <td className="px-4 py-2 whitespace-nowrap">order quantity</td>
              <td className="px-4 py-2 text-purple-500 whitespace-nowrap">order price</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
