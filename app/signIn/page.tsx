"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import React, { useRef } from "react";
import Link from "next/link";
import { Metadata } from "next";

const SigninPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex items-center justify-center">
        <form className="bg-[#F5CCA0] p-8 rounded shadow-md w-96 ">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">
            Sign In
          </h2>

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
              name="email"
              ref={emailRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-800"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-800"
              placeholder="Password"
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn("credentials", {
                  redirect: true,
                  email: emailRef.current?.value,
                  password: passwordRef.current?.value,
                  callbackUrl: "http://localhost:3000/",
                });
              }}
              type="submit"
              className=" bg-orange-800 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-orange-950"
            >
              Sign In
            </button>
          </div>
          <Link
            className="flex justify-center mt-4 text-orange-900 hover:text-orange-950 transition-colors ease-in-out"
            href="/register"
          >
            New User? Register
          </Link>

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
    </>
  );
};

export default SigninPage;

export const metadata: Metadata = {
  title: "Sign in to Adore A Pet",
  description: "Sign in, in this page",
};
