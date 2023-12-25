// "use client"; /////////////////////////
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import icon from "@/public/AdoreAPet-900x450.png";
import { AuthOptions } from "../api/auth/[...nextauth]/AuthOptions";
import Image from "next/image";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";

const NavBar = async () => {
  // const { status, data: session } = useSession();
  const session = await getServerSession(AuthOptions);

  return (
    <div className="bg-[#6B240C] flex justify-between m-2 rounded-md">
      <Link href="/">
        <Image
          className="ml-3 m-2 rounded-lg"
          src={icon}
          alt="logo"
          width={100}
          height={50}
        />
      </Link>
      <div className="flex justify-end space-x-3 mr-5">
        {session && (
          <h1 className="text-white font-semibold flex items-center mr-7">
            Hi,
            <Link
              href="/profile/mypets"
              className="ml-1 hover:text-yellow-600 cursor-pointer transition-colors ease-in-out"
            >
              <div className="flex">
                <p className="mr-2 ">{session?.user?.name}</p>
                <div className="flex items-center">
                  <FaChevronDown size="13" />
                </div>
              </div>
            </Link>
          </h1>
        )}

        {!session ? (
          <Link
            href="/api/auth/signin"
            className="transition-all ease-in-out text-white font-bold rounded-lg hover:border-orange-950 hover:text-orange-950 hover:bg-white st p-3 m-2"
          >
            Login
          </Link>
        ) : (
          <LogoutButton />
        )}

        {/* {session ? ( */}
        <Link
          href="/giveAPet"
          className="font-bold p-3 m-2 rounded-xl bg-amber-300"
        >
          Give A Pet
        </Link>
        {/* ) : ( */}
        {/* <Link
            href="/api/auth/signin"
            className="font-bold p-3 m-2 rounded-xl bg-amber-300"
          >
            Give A Pet
          </Link> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default NavBar;
