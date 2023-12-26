import React from "react";

const loading = () => {
  return (
    <div className="w-full rounded-3xl bg-[#F5CCA0]">
      {/* <h1 className="text-5xl font-bold">About {petDetail?.name}</h1> */}
      <div className="animate-pulse grid grid-flow-col grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <div className="h-[70vh] m-4 rounded-md flex items-center bg-[#d1ae89]"></div>
          <div className="mt-7 p-5 bg-[#dab084]">
            <h2 className="text-3xl  mb-4 font-bold"></h2>
            <h3 className=""></h3>
          </div>
        </div>
        <div className="ml-7 ">
          <h2 className="p-4 pt-7 text-5xl font-bold ">About</h2>

          <h2 className="p-4 text-xl font-bold text-orange-950"></h2>

          <div className="m-3 mb-7 grid grid-flow-row ">
            <div className="flex">
              <h2 className="font-bold p-3">Breed</h2>
              <h3 className="p-3"></h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Gender</h2>
              <h3 className="p-3"></h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Age</h2>
              <h3 className="p-3"></h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Animal</h2>
              <h3 className="p-3"></h3>
            </div>
          </div>
          <div className="bg-[#f3a35e] rounded-lg shadow-lg m-5"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
