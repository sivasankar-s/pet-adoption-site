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
import ComboBox from "./components/ComboBox";
import Dropdown from "./components/Dropdown";

interface Props {
  searchParams: { type: "dog" | "cat" };
}

export default async function Home({ searchParams: { type } }: Props) {
  // const prisma = new PrismaClient();

  // if(await checkPhoneAdded()){

  // }

  const allPetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: true,
    },
    select: {
      id: true,
      slug: true,
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

  const somePetDetails = await prisma.petDetails.findMany({
    where: {
      availableStatus: true,
      type: type,
    },
    select: {
      id: true,
      slug: true,
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

  const selectedItem = "All";

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

      {/* <Link href="/">All</Link>
      <Link href="/?type=dog">Dog</Link>
      <Link href="/?type=cat">Cat</Link> */}

      <div className="flex  justify-center">
        <div className="flex items-center my-2 mb-6 mr-10">
          {/* <ComboBox check="available" /> */}
          <Dropdown display={type ? type : "All"} status="available" />
        </div>
        {/* <div className="flex justify-between border border-black"> */}
        <div className="flex ml-10  justify-center text-[#6B240C]  space-x-32 mt-16 mb-20">
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
        {/* </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-20 pb-10 ">
        {!type
          ? allPetDetails.map((pet, i) => (
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
    </main>
  );
}
