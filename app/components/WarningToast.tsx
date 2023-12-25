import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const WarningToast = () => {
  return (
    <div className="bg-yellow-500">
      <div className="flex text-lg font-semibold">
        <IoWarningOutline />
        <p className="ml-3">Phone Number is not Added</p>
      </div>
      <h1 className="text-md">
        Add phone number in profile for users to contact
      </h1>
    </div>
  );
};

export default WarningToast;
