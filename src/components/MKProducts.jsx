import React from "react";

import MKProducts from "../data/MKProducts.json";

const MKProducts = () => {
//destructure data
    const {bags} = data;
    console.log(data)
    return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
        {bags.map((MKbags) => {
            //destructure data
            const {name, id, color, desctription} =MKbags;

            return (
                <div key={id} className="nt-10">
                    <div>
                        {desctription.map((infobags)  => {
                            //destructure data
                            const {info, img1} = infobags;
                            return <div> {info} </div>;

                        })}
                    </div>
                    </div>
            );
        })}
    </div>
);
};
export  default MKProducts
       