// "use client";

import Image from "next/image";
import React from "react";
import dogImg from "@/public/dog1.jpg";
// import { FieldValues, useForm } from "react-hook-form";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import { onSubmitNewPet } from "../actions";
import ImageUpload from "../components/imageUpload";
import SubmitButton from "../components/SubmitButton";

const page = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const genderRef = useRef<HTMLInputElement>(null);
  //   const BreedRef = useRef<HTMLInputElement>(null);
  //   const dobRef = useRef<HTMLInputElement>(null);
  //   const typeRef = useRef<HTMLInputElement>(null);

  // const { register, setValue } = useForm();
  // const { data: session } = useSession();
  // const router = useRouter();
  // const [imgUrl, setImgUrl] = useState("");

  // const onSubmit = async (data: FieldValues) => {
  //   // e.preventDefault();
  //   console.log(imgUrl);

  //   const res = await fetch("api/addPet", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       ...data,
  //       email: session?.user?.email,
  //       url: imgUrl,
  //     }),
  //   });
  //   router.push("/");
  //   console.log(res);
  //   console.log(data);
  // };

  // const onSubmit = async (body: FormData) => {
  //   "use server";
  // console.log(body.get("breed")?.toString());

  // })
  // };

  return (
    <div className="w-full">
      <Image src={dogImg} alt="dog" className=" h-44 object-scale-down" />
      <form
        action={onSubmitNewPet}
        // onSubmit={handleSubmit(onSubmit)}
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
                // {...register("name")}
                name="name"
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
                  // {...register("animalType")}
                  className="ml-1 p-3"
                  name="animalType"
                  value="dog"
                  type="radio"
                />
              </div>
              <div className="flex mr-2 ">
                <label>Cat</label>
                <input
                  // {...register("animalType")}
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
                  // {...register("gender")}
                  className="ml-1 p-3"
                  name="gender"
                  value="male"
                  type="radio"
                />
              </div>
              <div className="flex mr-2">
                <label>Female</label>
                <input
                  // {...register("gender")}
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
                // {...register("breed")}
                name="breed"
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
                // {...register("dob")}
                name="dob"
                className="p-3 ml-4 text-xl placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
                type="text"
                placeholder="Ex: 2 months, 4 years, 3 weeks."
              />
            </div>
          </div>
          <div className="p-4 flex-col m-4">
            <div className="mb-4 text-3xl font-semibold">
              <label className="p-3 text-orange-900">Photo</label>
            </div>
            <ImageUpload />
          </div>
        </div>
        <div className="p-4 flex-col m-4">
          <div className="mb-4 text-3xl font-semibold">
            <label className="p-3 text-orange-900">Description</label>
          </div>
          <div>
            <textarea
              // {...register("description")}
              name="description"
              className="resize-none p-3 ml-4 text-xl w-5/6 h-48 placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
              placeholder="Tell few words about your Pet, and other things if any..."
            />
          </div>
        </div>

        <div className="flex justify-center p-10">
          <SubmitButton toastMessage="Your Pet is added" />
        </div>
      </form>
    </div>
  );
};

export default page;
