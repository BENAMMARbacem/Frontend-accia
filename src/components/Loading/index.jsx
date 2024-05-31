import React from "react";
import { BounceLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader color="#36d7b7" />
    </div>
  );
}
