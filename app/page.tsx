import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import GridCard from "./components/GridCard";
import { animals } from "@/sampledata";
// import { PrismaClient } from "@prisma/client";
import prisma from "./prsima";
import { checkPhoneAdded } from "./actions";
import Toastwrap from "./components/Toastwrap";
import CurrentLinkProvider from "./components/CurrentLinkProvider";

export default async function Home() {
  // const prisma = new PrismaClient();

  // if(await checkPhoneAdded()){

  // }

  const allPetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: true,
    },
    select: {
      id: true,
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
      <div className="hidden">
        {" "}
        {(await checkPhoneAdded()) === false && (
          <Toastwrap message="Phone number is not added" toastType="error" />
        )}
        {/* <Toastwrap /> */}
      </div>

      <Hero />
      <div className="flex justify-center text-[#6B240C]  space-x-32 mt-16 mb-20">
        <CurrentLinkProvider href="/">
          <Link
            href="/"
            className=" font-bold flex hover:scale-110 transition-all ease-in-out"
          >
            <FaPaw className="mr-2" /> Availbale Pets
          </Link>
        </CurrentLinkProvider>

        <CurrentLinkProvider href="/adopted">
          <Link
            href="/adopted"
            className=" font-bold flex hover:scale-110 transition-all ease-in-out"
          >
            <FaPaw className="mr-2" />
            Adopted Pets
          </Link>
        </CurrentLinkProvider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20 pb-10 ">
        {allPetDetails.map((pet, i) => (
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
        ))}
        {/* {allPetDetails} */}
      </div>
    </main>
  );
}
