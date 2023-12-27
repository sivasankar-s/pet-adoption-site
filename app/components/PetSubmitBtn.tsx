"use client";

import React from "react";
import toast from "react-hot-toast";
import { onSubmitNewPet } from "../actions";

// const handleSubmit = () => {
//     const res = onSubmitNewPet();
// }

const PetSubmitBtn = () => {
  return (
    <button
      className="bg-orange-800 font-bold text-white p-3 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-blue-400"
      type="submit"
      //   onClick={() => toast.success(toastMessage)}
    >
      Submit
    </button>
  );
};

export default PetSubmitBtn;
