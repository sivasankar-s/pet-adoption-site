"use client";

import { CldUploadWidget } from "next-cloudinary";
import React from "react";

interface CloundinaryResult {
  url: string;
}

const ImageUpload = () => {
  let display = "Upload";
  const setVal = (url: string) => {
    let img = document.getElementById("url");
    img?.setAttribute("value", url);
    display = "Uploaded";
  };

  return (
    <div>
      <input type="hidden" name="url" id="url" />
      <CldUploadWidget
        // {...register("url")}
        uploadPreset="uzjonn68"
        onUpload={(res, widget) => {
          if (res.event !== "success") return;
          const info = res.info as CloundinaryResult;
          // setImgUrl(info.url);
          // console.log(info.url);
          setVal(info.url);
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
              {display}
              {/* {imgUrl !== "" ? "Uploaded" : "Upload an Image"} */}
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
