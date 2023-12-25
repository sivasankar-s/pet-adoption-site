import React from "react";
import prisma from "@/app/prsima";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

const OwnerDetailsCard = async ({ email }: { email: string }) => {
  const ownerDetail = await prisma.user.findUnique({
    where: { email: email },
  });

  return (
    <div className=" bg-[#f3a35e] rounded-lg shadow-lg m-5 hover:bg-[#e09756] transition-colors ease-in-out">
      <h2 className="m-3 pt-3 pl-3 text-2xl font-semibold">Contact</h2>
      <div className="flex pb-4">
        <div className="mr-5">
          {ownerDetail?.image && (
            <Image
              className="rounded-full ml-5 my-5"
              src={ownerDetail!.image!}
              width={60}
              height={60}
              alt="profile"
            />
          )}
        </div>
        <div className="ml-1 pb-2">
          <h3 className="text-xl font-semibold">{ownerDetail?.name}</h3>
          <div className="text-lg">
            <h3 className="flex">
              <div className="flex items-center mr-2">
                <MdEmail />
              </div>
              <p>{ownerDetail?.email}</p>
            </h3>
            <h3 className="flex">
              <div className="flex items-center mr-2">
                <MdPhone />
              </div>
              <Link
                href={"tel:" + ownerDetail?.phoneNumber}
                className="hover:text-blue-800"
              >
                {ownerDetail?.phoneNumber}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDetailsCard;
