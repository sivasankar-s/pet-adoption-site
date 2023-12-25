import React from "react";

const SignInLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="bg-[#F5CCA0] animate-pulse h-[65vh] p-8 rounded shadow-md w-96 ">
        <h2 className="text-2xl rounded-lg bg-[#d1ae88] font-semibold mb-4 flex justify-center"></h2>

        {/* Email Input */}
        <div className="mb-4">
          <div className="w-full px-4 py-2 bg-gray-300 border rounded-md focus:outline-none focus:border-orange-800" />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="w-full px-4 py-2 bg-gray-300 border rounded-md focus:outline-none focus:border-orange-800" />
        </div>

        {/* Sign In Button */}
        <div className="flex justify-center">
          <div className=" bg-orange-800  text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-orange-950">
            {/* Sign In */}
          </div>
        </div>

        {/* OR Divider */}
        <div className="mt-4 mb-2 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Sign In with Google Button */}
        <div className="flex justify-center">
          <div className="bg-gray-200 font-semibold flex px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-gray-400"></div>
        </div>
      </form>
    </div>
  );
};

export default SignInLoading;
