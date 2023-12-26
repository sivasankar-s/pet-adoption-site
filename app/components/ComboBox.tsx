"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const ComboBox = ({ check }: { check: "available" | "adopted" }) => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (option: string) => {
    if (check === "available") {
      router.push(`/${option}`);
    } else {
      router.push(`/adopted/${option}`);
    }
    setDropdownOpen(false);
  };

  return (
    <>
      <select
        className="mb-3 p-2 rounded-md outline-none border-2 border-gray-500 bg-gray-200 hov"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleChange(e.target.value)
        }
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
      >
        <option key={1} className="hover:bg-gray-300 rounded-md" value="">
          All
        </option>
        <option
          key={2}
          className="hover:bg-gray-300 rounded-md"
          value="?type=dog"
        >
          Dog
        </option>
        <option
          key={3}
          className="hover:bg-gray-300 rounded-md"
          value="?type=cat"
        >
          Cat
        </option>
      </select>
    </>
  );
};

export default ComboBox;
