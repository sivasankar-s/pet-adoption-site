"use client";

import React, { useState } from "react";
import ImageUpload from "./imageUpload";
import SubmitButton from "./SubmitButton";
import { onSubmitNewPet } from "../actions";
import { FieldValues, useForm } from "react-hook-form";
import { ZodIssue, z } from "zod";
import toast from "react-hot-toast";
import { CldUploadWidget } from "next-cloudinary";

interface CloundinaryResult {
  url: string;
}

// const error = res as Promise<ZodIssue[] | undefined>;

// const error = res as z.ZodIssue[]
// const error = res as Errors[];
// error.map(err => toast.error(err.message));

const PetForm = () => {
  const { register, handleSubmit } = useForm();

  const [imgUrl, setImgUrl] = useState("");

  const [isSubmitted, setSubmit] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    data = { ...data, imgurl: imgUrl };
    console.log(data);
    const res = onSubmitNewPet(data).then((errors) =>
      errors?.map((err) => toast.error(err.message))
    );
    if (res === undefined) {
      toast.success("Your pet is added");
    }
  };

  return (
    <form
      // action={onSubmitNewPet}
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
                {...register("animalType")}
                className="ml-1 p-3"
                name="animalType"
                value="dog"
                type="radio"
                required
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
                required
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
              name="breed"
              className="p-3 ml-4 text-xl placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
              type="text"
              placeholder="Breed"
            />
          </div>
        </div>
        <div className="p-4 flex-col m-4">
          <div className="mb-4 text-3xl font-semibold">
            <label className="p-3 text-orange-900">Age</label>
          </div>
          <div>
            <input
              {...register("dob")}
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

          {/* <ImageUpload /> */}
          <CldUploadWidget
            // {...register("url")}
            uploadPreset="uzjonn68"
            onUpload={(res, widget) => {
              if (res.event !== "success") return;
              const info = res.info as CloundinaryResult;
              // setImgUrl(info.url);
              // console.log(info.url);
              setImgUrl(info.url);
            }}
            options={{
              sources: ["local", "camera", "google_drive"],
              showAdvancedOptions: false,
              cropping: true,
              multiple: false,
              defaultSource: "local",
              styles: {
                palette: {
                  window: "#EFB375",
                  windowBorder: "#56341A",
                  tabIcon: "#994D1C",
                  menuIcons: "#994D1C",
                  textDark: "#000000",
                  textLight: "#DEDADA",
                  link: "#803F26",
                  action: "#EC5E10",
                  inactiveTabIcon: "#0E2F5A",
                  error: "#F44235",
                  inProgress: "#0078FF",
                  complete: "#20B832",
                  sourceBg: "#E48F45",
                },
              },
            }}
          >
            {({ open }) => {
              return (
                <button
                  type="button"
                  className="p-4 mt-5 mr-10 bg-[#994D1C] text-white font-bold rounded-lg hover:bg-orange-950 transition-colors ease-in-out"
                  onClick={() => open()}
                >
                  {/* {display} */}
                  {imgUrl !== "" ? "Uploaded" : "Upload an Image"}
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
      </div>
      <div className="p-4 flex-col m-4">
        <div className="mb-4 text-3xl font-semibold">
          <label className="p-3 text-orange-900">Description</label>
        </div>
        <div>
          <textarea
            {...register("description")}
            name="description"
            className="resize-none p-3 ml-4 text-xl w-5/6 h-48 placeholder:text-[#E48F45] bg-transparent border-b-2 border-b-orange-900 outline-none"
            placeholder="Tell few words about your Pet, and other things if any..."
          />
        </div>
      </div>

      <div className="flex justify-center p-10">
        {/* <SubmitButton toastMessage="Your Pet is added" /> */}
        <button
          type="submit"
          onClick={() => setSubmit(true)}
          className="bg-orange-800 font-bold text-white p-3 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-blue-400"
        >
          {isSubmitted ? "Adding Pet" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default PetForm;
