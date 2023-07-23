import React, { useRef, useState } from "react";
import { Rating, Typography } from "@material-tailwind/react";
import AllSearchProductSumbitComment from "./AllSearchProductSumbitComment";

const AllSearchProductComments = () => {
  const [rated, setRated] = React.useState(0);
  const [textAreaState, setTextAreaState] = useState();
  const [inputState, setInputState] = useState();
  const [ratingState, setRatingState] = useState();

  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const handleClick = (event) => {
    // 👇️ access textarea value
    event.preventDefault();
    setTextAreaState(textareaRef.current.value);
    setInputState(inputRef.current.value);
    setRatingState(rated);
  };
  return (
    <div className="w-[100%] h-[90vh] border-red font-montserrat">
      <div className="flex justify-center w-[100%]">
        <div className="w-[95%] ">
          <div>
            <p className=" text-[1.2rem] font-semibold">Rate Product</p>
          </div>
          <form action="" onSubmit={handleClick}>
            <div className="flex items-center gap-2">
              <Rating value={0} onChange={(value) => setRated(value)} />
              <Typography
                color="blue-gray"
                className="font-medium text-[.9rem]"
              >
                {rated}.0 Rated
              </Typography>
            </div>
            <input type="text" ref={inputRef} />
            <div className="w-[100%] mt-[10px]">
              <textarea
                label="Message"
                className="!rounded-sm"
                ref={textareaRef}
              />
            </div>
            <button className="!bg-primary/60 !rounded-sm " type="submit">
              sumbit
            </button>
          </form>
        </div>
      </div>
      <AllSearchProductSumbitComment
        textAreaState={textAreaState}
        inputState={inputState}
        ratingState={ratingState}
        rated={rated}
        setRated={setRated}
        setRatingState={setRatingState}
      />
    </div>
  );
};

export default AllSearchProductComments;
