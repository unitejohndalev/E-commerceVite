import React from "react";

//import data
import data from "../data/Acc.json";

console.log(data);
const Home = () => {
  //destructure data
  const { bags } = data;

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      {bags.map((bagproducts) => {
        //destructure bagproducts
        const { description, id } = bagproducts;
     
        return (
          <div key={id} className=" mt-10">
            <div>
              {description.map((infobag) => {
                const { info, img1 } = infobag;
                return <div>{info}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
