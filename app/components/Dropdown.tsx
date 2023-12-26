import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({
  display,
  status,
}: {
  display: string;
  status: "available" | "adopted";
}) => {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1 flex">
        {/* {selectedItem} */}
        <p>{display[0].toUpperCase() + display.substring(1)}</p>
        <FaChevronDown />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-52"
      >
        <li className="hover:bg-gray-400 hover:rounded-box">
          {status === "available" ? (
            <Link href="/">All</Link>
          ) : (
            <Link href="/adopted">All</Link>
          )}
        </li>
        <li className="hover:bg-gray-400 hover:rounded-box">
          {status === "available" ? (
            <Link href="/?type=dog">Dog</Link>
          ) : (
            <Link href="/adopted?type=dog">Dog</Link>
          )}
        </li>
        <li className="hover:bg-gray-400 hover:rounded-box">
          {status === "available" ? (
            <Link href="/?type=cat">Cat</Link>
          ) : (
            <Link href="/adopted?type=cat">Cat</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
