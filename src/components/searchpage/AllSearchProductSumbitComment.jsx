/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Rating, Typography } from "@material-tailwind/react";
// eslint-disable-next-line no-unused-vars
const AllSearchProductSumbitComment = ({
  textAreaState,
  inputState,
  ratingState,
  setRatingState,
}) => {
  return (
    <div className="h-[50vh] border-red mt-10 ">
      <div className="flex justify-center w-[100%]">
        <div className="w-[95%] border border-black/60 rounded-sm p-2">
          <div>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={
                    index <= ratingState ? "text-yellow-800" : "text-white"
                  }
                >
                  <span className="star text-[2rem]">&#9733;</span>
                </button>
              );
            })}
          </div>
          <div className="">
            <p className="text-black/50">@ {inputState}</p>
          </div>
          <div className="w-[100%] text-[.9rem]">
            <p>{textAreaState}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSearchProductSumbitComment;
