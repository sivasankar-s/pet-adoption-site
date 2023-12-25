import React from "react";

const loading = () => {
  return (
    <div className="flex">
      <div className="flex animate-pulse ">
        <div className="bg-orange-300 h-[75vh] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default loading;
