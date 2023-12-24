"use client";

import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";

const AddPhone = () => {
  const { status, data: session } = useSession();
  const email = session?.user?.email;
  const phnRef = useRef<HTMLInputElement>(null);

  const [phone, setPhone] = useState("");

  // let phone = "";
  const phnReqData = fetch("/api/addPhone", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      setPhone(data.phoneNumber);
      console.log(data.phoneNumber);
    });
  // .then((data) => console.log(data));
  // console.log(phnReqData.json);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //phnRef.current.value;
    const phoneNumber = phnRef.current?.value;
    const data = { email, phoneNumber };
    console.log(data);
    const res = await fetch("/api/addPhone", {
      method: "PUT",
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <h1>Add Phone Number</h1>
      {/* {phone} */}
      <form onSubmit={handleSubmit}>
        <input
          className="p-4 mt-3 border border-black"
          name="phn"
          ref={phnRef}
          type="text"
          placeholder={phone}
        />
        <button
          className="bg-orange-800 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:ring focus:border-blue-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPhone;
