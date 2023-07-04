import React from "react";

import MKProduct from "../MKProducts.json";
import MKProps from "../properties/MKProps";

export const MKShop = () => {

    return (
        <div className="">
            <div className="shopTitle">
            <h1>MK Products</h1>
            </div>
<div className="mkproducts"> {""} 
{MKProduct.map((mkproduct) => (
    <MKProps data={mkproduct} />
))}
</div>
</div>
    )
};