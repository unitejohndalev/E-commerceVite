import React from "react";
import BagFilteredList from "./BagFilteredList";

const BagMain = () => {
  return (
    <div className="relative">
      <div className="max-w-[1240px] top-0 absolute">
        <button className="absolute z-10 left-[305px] btn-bg px-5 py-2 rounded-sm text-white">
          Bags
        </button>
      </div>

      <BagFilteredList />
    </div>
  );
};

export default BagMain;
