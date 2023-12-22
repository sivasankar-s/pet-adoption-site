import Image from "next/image";
import React from "react";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import { FaBirthdayCake, FaCat, FaDog } from "react-icons/fa";

interface Props {
  type: string;
  image: string;
  name: string;
  dob: string;
  gender: string;
  breed: string;
}

const GridCard = ({ type, image, name, dob, gender, breed }: Props) => {
  return (
    <div className="shadow-lg rounded-lg bg-orange-300 shake overflow-hidden hover:scale-105 transition-all ease-in-out">
      <div className="">
        <Image
          src={image}
          alt="image"
          width={150}
          height={250}
          // layout="responsive"
          className="w-full h-60 object-cover"
        />
      </div>
      <div>
        {/* <div className="flex"> */}

        <h2 className="text-lg  font-bold grid justify-items-center mt-4">
          <div className="flex">
            <span className="mr-3 shake-element">
              {type === "dog" ? <FaDog /> : <FaCat />}
            </span>
            {name}
          </div>
        </h2>
        {/* </div> */}

        <h3 className="font-semibold text-[#6B240C] flex justify-center">
          {breed}
        </h3>
        <div className="flex justify-around p-1 mt-5 mb-3">
          <h4>
            <div className="flex">
              <FaBirthdayCake /> <p className="ml-2">{dob}</p>
            </div>
          </h4>
          <h4>
            {gender === "male" ? (
              <div className="flex">
                <IoMdMale /> <p className="ml-2">Male</p>
              </div>
            ) : (
              <div className="flex">
                <IoMdFemale /> <p className="ml-2">Female</p>
              </div>
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
