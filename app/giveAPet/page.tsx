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
import { Metadata } from "next";
import PetForm from "../components/PetForm";

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
      <PetForm />
    </div>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Give A Pet",
  description: "Submit your pet details in this page",
};
