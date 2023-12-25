import Link from "next/link";
import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#6B240C] h-20 ">
      <div className="flex justify-center">
        <div className="pt-5 flex">
          <div className="flex mr-10">
            <Link
              href="https://github.com/sivasankar-s/pet-adoption-site"
              target="_blank"
            >
              <FaGithub size={26} color="white" />
            </Link>
          </div>
          <p className="text-md text-white  mr-3">Made by Siva with </p>
          <div className="flex items-center">
            <FaHeart color="#f02e2e" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center m-3 pb-3 ">
        <FaGithub size={26} color="white" />
      </div> */}
    </div>
  );
};

export default Footer;
