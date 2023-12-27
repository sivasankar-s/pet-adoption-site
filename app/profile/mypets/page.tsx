import { getServerSession } from "next-auth";
import React from "react";
import prisma from "@/app/prsima";
import Link from "next/link";
import GridCard from "@/app/components/GridCard";

const page = async () => {
  const session = await getServerSession();

  const allPetDetails = await prisma.petDetails.findMany({
    where: {
      owner: session?.user?.email!,
    },
    select: {
      id: true,
      type: true,
      imageUrl: true,
      name: true,
      gender: true,
      dateOfBirth: true,
      breed: true,
      slug: true,
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-10">My Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 pb-10 ">
        {allPetDetails.map((pet, i) => (
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
