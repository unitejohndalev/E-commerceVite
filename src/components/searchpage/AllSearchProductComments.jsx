import React, { useRef, useState } from "react";

import AllSearchProductSumbitComment from "./AllSearchProductSumbitComment";

const AllSearchProductComments = () => {
  const [rated, setRated] = React.useState(0);
  const [userNameState, setUserNameState] = useState("");
  const [userCommentState, setUserCommentState] = useState("");

  const initialFormData = Object.freeze({
    username: setUserNameState,
    comment: setUserCommentState,
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();

    const userReview = {
      id: Math.floor(Math.random() * 10),
      userRating: rated,
      userName: formData.username,
      userComment: formData.comment,
    };

    setItems((prevlist) => [...prevlist, userReview]);
    setRated(0);
    userNameRef.current.value = "";
    userCommentRef.current.value = "";
  };

  const userNameRef = useRef(null);
  const userCommentRef = useRef(null);

  return (
    <div className="w-[100%] mt-10 h-[90vh] font-montserrat">
      <div className="flex justify-center w-[100%]">
        <div className="w-[95%] xl:w-[1234px]">
          <div>
            <p className=" text-[1.2rem] font-semibold lg:text-[2rem]">Rate Product</p>
          </div>
          <form action="" onSubmit={addItem} className=" w-[100%] flex flex-col items-start p-0">
            <div className="">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index <= rated ? "text-yellow-800" : "text-white"
                    }
                    onClick={() => setRated(index)}
                  >
                    <span className="star text-[2.5rem] lg:text-[3rem]">&#9733;</span>
                  </button>
                );
              })}
            </div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              ref={userNameRef}
              className="w-[70%] rounded-sm h-[45px] placeholder:text-[1.2rem]
               pl-5 outline-none text-[1.2rem] lg:w-[400px]"
              placeholder="username"
            />
            <div className="w-[100%] mt-[10px]">
              <textarea
                label="Message"
                className="!rounded-sm w-[100%] h-[100px] mb-2
                placeholder:text-[1.2rem]  pl-5 outline-none text-[1.2rem]
                resize-none lg:w-[600px] lg:h-[200px] pt-2
                "
                name="comment"
                placeholder="comment"
                onChange={handleChange}
                ref={userCommentRef}
              />
            </div>

            <button
              className="!bg-primary/60 !rounded-sm text-[1.2rem] py-3 px-12 text-white font-medium"
              type="submit"
            >
              sumbit
            </button>
          </form>
        </div>
      </div>
      <AllSearchProductSumbitComment items={items} />
    </div>
  );
};

export default AllSearchProductComments;
