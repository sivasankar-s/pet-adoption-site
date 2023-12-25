"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="transition-all ease-in-out text-white font-bold rounded-lg hover:border-orange-950 hover:text-orange-950 hover:bg-white st p-3 m-2"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
