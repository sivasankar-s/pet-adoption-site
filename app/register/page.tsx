"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { POST } from "../api/register/route";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
// import bcrypt from "bcrypt";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(res);
  };
  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-[#F5CCA0] p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-4 flex justify-center">
          Register
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            placeholder="password"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Phone"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-orange-800 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-orange-950"
            // className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-400 w-full"
          >
            Register
          </button>
        </div>
        {/* OR Divider */}
        <div className="mt-4 mb-2 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Sign In with Google Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gray-200 font-semibold flex px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-gray-400"
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          >
            <p className="mr-2">Sign In with Google</p>
            <FcGoogle size="22" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
