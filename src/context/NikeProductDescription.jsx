import React, { useRef, useState } from "react";

//import data
import data from "../NikeProducts.json";

const NikeProductDescription = () => {
  //destructure nike data
  const { shoes, hats } = data;

  //show state
  const [show, setShow] = useState();

  //onclick event listener toggle function
  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  //page ref state
  let NikeRef = useRef();

  //useEffect state, handle side effect
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!NikeRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });
  return (
    <div>
      <div ref={NikeRef} className="">
        {/* toggle button */}
        <button
          className="top-[45px] ml-[16px] lg:h-[50px] lg:w-[150px] rounded-xl mt-2 bg-red-600 text-white font-medium
         text-[1.2rem] lg:ml-[750px] lg:top-1 fixed z-10 px-[2px] transition-all"
          onClick={toggle}
        >
          NikeInfo
        </button>
        {/* show state */}
        {show && (
          <div className="h-[100vh] overflow-auto">
            <div>
              {/* map first data */}
              {shoes.map((info) => {
                {
                  /* destructure data */
                }
                const { description, name, id } = info;
                return (
                  <div key={id} className="relative">
                    {/* get nested data */}
                    {description && (
                      <div className="mt-10 shadow-xl w-[90%] mx-auto">
                        {/* map second data */}
                        {description.map((desInfo) => {
                          const { id, info, img1, img2, img3 } = desInfo;
                          return (
                            <div key={id} className="flex flex-col h-[100vh]">
                              <div
                                className="relative gap-6 w-[90%] m-auto h-[90vh] flex 
                        items-center"
                              >
                                <div className="ml-[200px] relative hidden lg:flex flex-col gap-y-6 w-[150px] h-[90%] max-w-[1220px]">
                                  <img
                                    className="rounded-xl"
                                    src={img1}
                                    alt=""
                                  />
                                  <img
                                    className="rounded-xl"
                                    src={img2}
                                    alt=""
                                  />
                                  <img
                                    className="rounded-xl"
                                    src={img3}
                                    alt=""
                                  />
                                </div>

                                <div className="relative h-[100%] w-[100%] flex justify-center gap-x-10">
                                  <img
                                    className="w-[400px] h-[500px] lg:w-[550px] lg:h-[700px] lg:absolute lg:left-0 "
                                    src={img1}
                                    alt=""
                                  />

                                  <div className="flex items-center absolute h-[100%] xl:w-[40%] w-[100%] lg:right-0">
                                    <div className="absolute w-[100%] flex justify-center top-10">
                                      <h1 className=" text-[1rem] xl:text-[2.3rem] xxl:text-[2.5rem] font-light">
                                        {name}
                                      </h1>
                                    </div>
                                    <div className="h-[30%] absolute bottom-0 xl:relative ">
                                      <p className="font-light text-[1rem] xl:text-[1.2rem]">
                                        {info}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              {hats.map((hatsdata) => {
                const { name, description, id } = hatsdata;
                return (
                  <div key={id} className="relative">
                    {description && (
                      <div className="mt-10 shadow-xl w-[90%] mx-auto">
                        {description.map((desInfo) => {
                          const { id, info, img1, img2 } = desInfo;
                          return (
                            <div key={id} className="flex flex-col h-[100vh]">
                              <div
                                className="relative gap-6 w-[90%] m-auto h-[90vh] flex 
                        items-center"
                              >
                                <div className="ml-[200px] relative hidden lg:flex flex-col gap-y-6 w-[150px] h-[90%] max-w-[1220px]">
                                  <img
                                    className="rounded-xl"
                                    src={img1}
                                    alt=""
                                  />
                                  <img
                                    className="rounded-xl"
                                    src={img2}
                                    alt=""
                                  />
                                </div>

                                <div className="relative h-[90%] w-[100%] flex justify-center gap-x-10">
                                  <img
                                    className="w-[400px] h-[500px] lg:w-[600px] lg:h-[800px] lg:absolute lg:left-0 "
                                    src={img1}
                                    alt=""
                                  />

                                  <div className="flex items-center absolute h-[100%] xl:w-[40%] w-[100%] lg:right-0">
                                    <div className="absolute w-[100%] flex justify-center top-10">
                                      <h1 className=" text-[1rem] xl:text-[2.3rem] xxl:text-[3rem] font-medium">
                                        {name}
                                      </h1>
                                    </div>
                                    <div className="h-[30%] absolute bottom-0 xl:relative ">
                                      <p className="font-light text-[1rem] xl:text-[1.4rem]">
                                        {info}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NikeProductDescription;
