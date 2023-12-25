"use client";

import React, { useTransition } from "react";
import { changeAdoptStatus } from "../actions";

const ToggleAdopt = ({ petId, status }: { petId: string; status: boolean }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => changeAdoptStatus(petId));
        // toast.success("Status Changed");
      }}
      // type="checkbox"
      className="bg-orange-800 rounded-full px-3 py-2 text-white font-bold hover:bg-orange-900 transition-colors ease-in-out"
    >
      Change to {status ? "Adopted" : "Available"}
    </button>
  );
};

export default ToggleAdopt;
