import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import GridCard from "./components/GridCard";
import { animals } from "@/sampledata";
// import { PrismaClient } from "@prisma/client";
import prisma from "./prsima";

export default async function Home() {
  // const prisma = new PrismaClient();

  const allPetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: true,
    },
    select: {
      type: true,
      imageUrl: true,
      name: true,
      gender: true,
      dateOfBirth: true,
      breed: true,
    },
  });

  return (
    <main>
      {/* <Hero /> */}
      <Hero />
      <div className="flex justify-center space-x-32 mt-16 mb-20">
        <Link
          href="/"
          className="text-[#6B240C] font-bold flex hover:scale-110 transition-all ease-in-out"
        >
          <FaPaw className="mr-2" /> Availbale Pets
        </Link>
        <Link
          href="/adopted"
          className="text-[#6B240C] font-bold flex hover:scale-110 transition-all ease-in-out"
        >
          <FaPaw className="mr-2" />
          Adopted Pets
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 ">
        {allPetDetails.map((pet, i) => (
          <GridCard
            type={pet.type}
            image={pet.imageUrl}
            breed={pet.breed}
            dob={pet.dateOfBirth.toLocaleDateString()}
            gender={pet.gender}
            name={pet.name}
            key={i}
          />
        ))}
        {/* {allPetDetails} */}
      </div>
    </main>
  );
}
