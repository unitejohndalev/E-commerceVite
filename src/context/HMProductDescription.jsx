import React, { useRef, useState } from "react";

//import H&M data
import data from "../HMProducts.json";

const HMProductDescription = () => {
  //destructure data
  const { jackets, clothes } = data;

  //show & hide state
  const [show, setShow] = useState();

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
  let HMRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!HMRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });
  return (
    <div>
      <div ref={HMRef}>
        <button
          className="top-[45px] ml-[120px] lg:h-[50px] lg:w-[150px] rounded-xl mt-2 bg-red-600 text-white font-medium
         text-[1.2rem] lg:ml-[990px] lg:top-1 fixed z-10 px-[2px] transition-all"
          onClick={toggle}
        >
          HMInfo
        </button>
        {show && (
          <div>
            <div>
              <div>
                {jackets.map((jacketsData) => {
                  const { name, description, id } = jacketsData;
                  return (
                    <div key={id}>
                      {description && (
                        <div>
                          {description.map((descriptionData) => {
                            const { id, info, img1, img2, img3 } =
                              descriptionData;
                            return (
                              <div
                                key={id}
                                className="relative h-[100vh] max-w-[1440px] flex m-auto mt-[150px] bg-white"
                              >
                                <div className="flex flex-col mt-10">
                                  <div className="">
                                    {/* img */}
                                    <div className="h-[100%] hidden xl:flex xl:max-w-[200px] xl:flex-col xl:gap-y-10 xl:absolute xl:left-[100px]">
                                      <img
                                        className="rounded-xl h-[150px] w-[100px]"
                                        src={img1}
                                        alt=""
                                      />
                                      <img
                                        className="rounded-xl h-[150px] w-[100px]"
                                        src={img2}
                                        alt=""
                                      />
                                      <img
                                        className="rounded-xl h-[150px] w-[100px]"
                                        src={img3}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="max-w-[640px] rounded-xl
                          mb-[20px] absolute right-0 left-0 m-auto flex justify-center xxl:right-[200px]
                         "
                                  >
                                    {/* title */}
                                    <h1 className="absolute -top-9 font-medium text-[2rem]">
                                      {name}
                                    </h1>
                                    <img
                                      className="rounded-xl "
                                      src={img1}
                                      alt=""
                                      width={500}
                                      height={600}
                                    />
                                  </div>
                                </div>
                                {/* info */}
                                <div className="w-[100%] flex justify-center">
                                  <div
                                    className="absolute bottom-0 max-w-[550px] font-light text-[1.2rem] text-justify
                          xl:text-[1.4rem] xxl:right-10 xxl:bottom-[150px] xxl:max-w-[500px]"
                                  >
                                    <p>{info}</p>
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
            <div>
              {clothes.map((clothesData) => {
                const { name, description, id } = clothesData;
                return (
                  <div key={id}>
                    {description && (
                      <div>
                        {description.map((descriptionData) => {
                          const { id, info, img1, img2, img3 } =
                            descriptionData;
                          return (
                            <div
                              key={id}
                              className="relative h-[100vh] max-w-[1440px] flex m-auto mt-[150px] "
                            >
                              <div className="flex flex-col">
                                <div className="">
                                  {/* img */}
                                  <div className="h-[100%] hidden xl:flex xl:max-w-[200px] xl:flex-col xl:gap-y-10 xl:absolute xl:left-[100px]">
                                    <img
                                      className="rounded-xl h-[150px] w-[100px]"
                                      src={img1}
                                      alt=""
                                    />
                                    <img
                                      className="rounded-xl h-[150px] w-[100px]"
                                      src={img2}
                                      alt=""
                                    />
                                    <img
                                      className="rounded-xl h-[150px] w-[100px]"
                                      src={img3}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div
                                  className="max-w-[640px] rounded-xl
                          mb-[20px] absolute right-0 left-0 m-auto flex justify-center xxl:right-[200px]
                         "
                                >
                                  {/* title */}
                                  <h1 className="absolute -top-9 font-medium text-[2rem]">
                                    {name}
                                  </h1>
                                  <img
                                    className="rounded-xl "
                                    src={img1}
                                    alt=""
                                    width={500}
                                    height={600}
                                  />
                                </div>
                              </div>
                              {/* info */}
                              <div className="w-[100%] flex justify-center">
                                <div
                                  className="absolute bottom-0 max-w-[550px] font-light text-[1.2rem] text-justify
                          xl:text-[1.4rem] xxl:right-0 xxl:bottom-[150px] xxl:max-w-[500px]"
                                >
                                  <p>{info}</p>
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

export default HMProductDescription;
