import React from "react";
import Link from "next/link";
import CurrentLinkProvider from "../components/CurrentLinkProvider";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start  w-full">
      <h1 className="text-4xl mb-7 font-semibold flex justify-center">
        Profile
      </h1>
      <div id="outer container" className="flex ">
        <div
          id="sidebar"
          className="flex flex-col text-lg space-y-5 w-1/6 border-r-2 border-r-[#c7c7c7]"
        >
          <CurrentLinkProvider href="/profile/mypets">
            <Link href="/profile/mypets">My Pets</Link>
          </CurrentLinkProvider>

          <CurrentLinkProvider href="/profile/addphone">
            <Link href="/profile/addphone">Add Phone</Link>
          </CurrentLinkProvider>

          {/* <CustomLink href="/profile/addphone" display="Add Phone" /> */}

          {/* <CustomLink href="/profile/mypets" display="My Pets" /> */}
        </div>
        <div className="ml-14">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
