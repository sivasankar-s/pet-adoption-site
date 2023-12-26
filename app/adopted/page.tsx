import Link from "next/link";
import React from "react";
import { FaPaw } from "react-icons/fa";
import GridCard from "../components/GridCard";
import prisma from "@/app/prsima";
import Hero from "../components/Hero";
import ComboBox from "../components/ComboBox";
import Dropdown from "../components/Dropdown";
import { Metadata } from "next";

interface Props {
  searchParams: { type: "dog" | "cat" };
}

const page = async ({ searchParams: { type } }: Props) => {
  const adoptedPetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: false,
    },
    select: {
      slug: true,
      type: true,
      imageUrl: true,
      name: true,
      gender: true,
      dateOfBirth: true,
      breed: true,
      id: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  const somePetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: false,
      type: type,
    },
    select: {
      slug: true,
      id: true,
      type: true,
      imageUrl: true,
      name: true,
      gender: true,
      dateOfBirth: true,
      breed: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <Hero />
      {/* <Link href="/adopted">All</Link>
      <Link href="/adopted?type=dog">Dog</Link>
      <Link href="/adopted?type=cat">Cat</Link> */}

      <div className="flex  justify-center">
        <div className="flex items-center my-2 mb-6 mr-10">
          <Dropdown display={type ? type : "All"} status="adopted" />
        </div>
        <div className="flex ml-10 justify-center space-x-32 mt-16 mb-20">
          <Link
            href="/"
            className="text-[#6B240C] font-bold flex hover:scale-110 transition-all ease-in-out"
          >
            <FaPaw className="mr-2" /> Availbale Pets
          </Link>
          <Link
            href="/adopted"
            className=" font-bold flex hover:scale-110 transition-all ease-in-out"
          >
            <FaPaw className="mr-2" />
            Adopted Pets
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20 pb-10 ">
        {/* {adoptedPetDetails.map((pet, i) => (
          <Link href={"/pet/" + pet.id} key={i}>
            <GridCard
              type={pet.type}
              image={pet.imageUrl}
              breed={pet.breed}
              dob={pet.dateOfBirth}
              gender={pet.gender}
              name={pet.name}
            />
          </Link>
        ))} */}

        {!type
          ? adoptedPetDetails.map((pet, i) => (
              <Link href={"/pet/" + pet.slug} key={i}>
                <GridCard
                  type={pet.type}
                  image={pet.imageUrl}
                  breed={pet.breed}
                  dob={pet.dateOfBirth}
                  gender={pet.gender}
                  name={pet.name}
                />
              </Link>
            ))
          : somePetDetails.map((pet, i) => (
              <Link href={"/pet/" + pet.slug} key={i}>
                <GridCard
                  type={pet.type}
                  image={pet.imageUrl}
                  breed={pet.breed}
                  dob={pet.dateOfBirth}
                  gender={pet.gender}
                  name={pet.name}
                />
              </Link>
            ))}
        {/* {allPetDetails} */}
      </div>
    </div>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Adopted Pets",
};
