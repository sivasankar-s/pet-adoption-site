import React from "react";

const NavBar = () => {
  return (
    <div className="bg-orange-900 flex justify-between m-2 rounded-md">
      Logo
      <div className="flex justify-end space-x-3 mr-5">
        <button className="transition-all ease-in-out text-white font-bold rounded-lg hover:border-orange-950 hover:text-orange-950 hover:bg-white st p-3 m-2">
          Login
        </button>
        <button className="font-bold p-3 m-2 rounded-xl bg-amber-300">
          Give A Pet
        </button>
      </div>
    </div>
  );
};

export default NavBar;
