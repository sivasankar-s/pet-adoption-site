import Image from "next/image";
import React from "react";
import prisma from "@/app/prsima";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";
import OwnerDetailsCard from "@/app/components/OwnerDetailsCard";
import ToggleAdopt from "@/app/components/ToogleAdopt";

interface Props {
  params: { id: string };
}

const page = async ({ params: { id } }: Props) => {
  const petDetail = await prisma.petDetails.findUnique({ where: { id: id } });

  const session = await getServerSession(AuthOptions);

  return (
    <div className="w-full rounded-3xl bg-[#F5CCA0]">
      {/* <h1 className="text-5xl font-bold">About {petDetail?.name}</h1> */}
      <div className=" grid grid-flow-col grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <div className="h-[70vh] m-4 rounded-md flex items-center bg-[#d1ae89]">
            <Image
              className="h-full w-full object-contain"
              src={petDetail?.imageUrl!}
              alt="pet Image"
              width={500}
              height={100}
              // fill={true}
              // sizes="90vh"
              // objectFit="contain"
            />
          </div>
          <div className="mt-7 p-5">
            <h2 className="text-3xl mb-4 font-bold">Description</h2>
            <h3>{petDetail?.description}</h3>
          </div>
        </div>
        <div className="ml-7">
          <h2 className="p-4 pt-7 text-5xl font-bold">
            About {petDetail?.name}
          </h2>
          <div className="flex">
            <h2 className="p-4 text-xl mr-10 font-bold text-orange-950">
              {petDetail?.availableStatus ? "I'm Available!" : "I'm Adopted!"}
            </h2>
            <div className="flex items-center">
              {petDetail?.owner === session?.user?.email && (
                <ToggleAdopt
                  petId={petDetail?.id!}
                  status={petDetail?.availableStatus!}
                />
              )}
            </div>
          </div>
          {/* {petDetail?.availableStatus ? (
            <h2 className="p-4 text-xl font-bold text-orange-950">
              I&apos;m Available!
            </h2>
          ) : (
            <h2 className="p-4 text-xl font-bold text-orange-950">
              I&apos;m Adopted!
            </h2>
          )} */}

          <div className="m-3 mb-7 grid grid-flow-row">
            <div className="flex">
              <h2 className="font-bold p-3">Breed</h2>
              <h3 className="p-3">{petDetail?.breed}</h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Gender</h2>
              <h3 className="p-3">{petDetail?.gender}</h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Age</h2>
              <h3 className="p-3">{petDetail?.dateOfBirth}</h3>
            </div>
            <div className="flex">
              <h2 className="font-bold p-3">Animal</h2>
              <h3 className="p-3">{petDetail?.type}</h3>
            </div>
          </div>
          {session?.user ? (
            <OwnerDetailsCard email={petDetail?.owner!} />
          ) : (
            <p className="flex justify-center mt-4 text-lg text-orange-900 ">
              <Link
                href="/api/auth/signin"
                className="text-xl hover:text-orange-950 transition-colors ease-in-out mr-2"
              >
                Log in
              </Link>
              <p> to view Owner Details.</p>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
