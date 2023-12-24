"use client";

import Image from "next/image";
import React, { useRef } from "react";
import dogImg from "@/public/dog1.jpg";
import { FieldValues, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const genderRef = useRef<HTMLInputElement>(null);
  //   const BreedRef = useRef<HTMLInputElement>(null);
  //   const dobRef = useRef<HTMLInputElement>(null);
  //   const typeRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit } = useForm();
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    // e.preventDefault();

    const res = await fetch("api/addPet", {
      method: "POST",
      body: JSON.stringify({ ...data, email: session?.user?.email }),
    });
    router.push("/");
    console.log(res);
    console.log(data);
  };

  return (
    <div className="w-full">
      <Image src={dogImg} alt="dog" className=" h-44 object-scale-down" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-orange-300 rounded-3xl"
      >
        <h1 className="text-center p-6 text-orange-900 text-4xl font-extrabold">
          Give A Pet
        </h1>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  justify-items-start w-full">
          <div className="p-4 flex-col m-4">
            <div className="mb-4">
              <label className="p-3 text-3xl font-semibold text-orange-900">
                Pet Name
              </label>
            </div>
            <div>
              <input
                {...register("name")}
                className="p-3  ml-4 text-xl placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="p-4 m-4">
            <label className="p-3 mb-4 text-3xl font-semibold text-orange-900">
              Animal
            </label>
            <div className="p-3 flex text-xl">
              <div className="flex mr-4 ml-4 ">
                <label>Dog</label>
                <input
                  {...register("animalType")}
                  className="ml-1 p-3"
                  name="animalType"
                  value="dog"
                  type="radio"
                />
              </div>
              <div className="flex mr-2 ">
                <label>Cat</label>
                <input
                  {...register("animalType")}
                  className="ml-1 p-3"
                  name="animalType"
                  value="cat"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div className="p-4 m-4">
            <label className="p-3 mb-4 text-3xl font-semibold text-orange-900">
              Gender
            </label>
            <div className="p-3 flex text-xl">
              <div className="flex mr-4 ml-4">
                <label>Male</label>
                <input
                  {...register("gender")}
                  className="ml-1 p-3"
                  name="gender"
                  value="male"
                  type="radio"
                />
              </div>
              <div className="flex mr-2">
                <label>Female</label>
                <input
                  {...register("gender")}
                  className="ml-1 p-3"
                  name="gender"
                  value="female"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div className="p-4 flex-col m-4">
            <div className="mb-4">
              <label className="p-3 text-3xl font-semibold text-orange-900">
                Breed
              </label>
            </div>
            <div>
              <input
                {...register("breed")}
                className="p-3 ml-4 text-xl placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
                type="text"
                placeholder="Breed"
              />
            </div>
          </div>
          <div className="p-4 flex-col m-4">
            <div className="mb-4 text-3xl font-semibold">
              <label className="p-3 text-orange-900">Date Of Birth</label>
            </div>
            <div>
              <input
                {...register("dob")}
                className="p-3 ml-4 text-xl placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
                type="text"
                placeholder="DOB"
              />
            </div>
          </div>
          <div className="p-4 flex-col m-4">
            <div className="mb-4 text-3xl font-semibold">
              <label className="p-3 text-orange-900">Photo</label>
            </div>
            <div>
              <input type="file" placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="p-4 mt-5 mr-10 bg-orange-900 text-white font-bold rounded-lg hover:bg-orange-950 transition-colors ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
