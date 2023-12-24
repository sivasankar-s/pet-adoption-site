"use client"; /////////////////////////
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AuthOptions } from "../api/auth/[...nextauth]/route";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="bg-orange-900 flex justify-between m-2 rounded-md">
      Logo
      <div className="flex justify-end space-x-3 mr-5">
        {status === "authenticated" && (
          <h1 className="text-white font-semibold flex items-center mr-7">
            Hi,
            <Link
              href="/profile"
              className="ml-1 hover:text-black cursor-pointer transition-colors ease-in-out"
            >
              {session?.user?.name}
            </Link>
          </h1>
        )}

        {status === "unauthenticated" && (
          <Link
            href="/api/auth/signin"
            className="transition-all ease-in-out text-white font-bold rounded-lg hover:border-orange-950 hover:text-orange-950 hover:bg-white st p-3 m-2"
          >
            Login
          </Link>
        )}
        {status === "authenticated" && (
          <button
            onClick={() => signOut()}
            className="transition-all ease-in-out text-white font-bold rounded-lg hover:border-orange-950 hover:text-orange-950 hover:bg-white st p-3 m-2"
          >
            Log Out
          </button>
        )}

        {status === "authenticated" && (
          <Link
            href="/giveAPet"
            className="font-bold p-3 m-2 rounded-xl bg-amber-300"
          >
            Give A Pet
          </Link>
        )}
        {status === "unauthenticated" && (
          <Link
            href="/api/auth/signin"
            className="font-bold p-3 m-2 rounded-xl bg-amber-300"
          >
            Give A Pet
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
