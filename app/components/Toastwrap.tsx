"use client";

import React, { useEffect, useState } from "react";
import WarningToast from "./WarningToast";
import toast from "react-hot-toast";

const Toastwrap = ({
  message,
  toastType,
}: {
  message: string;
  toastType: string;
}) => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="hidden">
      {/* {toast((t) => (
        <WarningToast />
      ))} */}
      {isClient && toastType === "error" && toast.error(message)}
      {isClient && toastType === "success" && toast.success(message)}
    </div>
  );
};

export default Toastwrap;
