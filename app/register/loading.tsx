import React from "react";

const RegisterLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="bg-[#F5CCA0] animate-pulse p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        {/* Name Input */}
        <div className="mb-4">
          <div
            // {...register("name", { required: "Name is required" })}
            className="bg-gray-300 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <div className="bg-gray-300 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <div className="bg-gray-300 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <div className="bg-gray-300 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>

        {/* Submit Button */}
        <div
          className=" bg-orange-800 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-orange-950"
          // className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400 w-full"
        ></div>
      </form>
    </div>
  );
};

export default RegisterLoading;
