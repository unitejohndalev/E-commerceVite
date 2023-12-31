/* eslint-disable react/prop-types */
import React from "react";

const FilterSelectFunction = (props) => {
  //destructure props
  function onstatusvaluechanged(event) {
    props.filterValueSelected(event.target.value);
  }
  return (
    <div className=" relative w-[100%] ">
      <div className="absolute -top-5 left-1 md:top-0 md:left-[25px] lg:left-[65px] xl:left-[120px] ">
        <select
          className="outline-none p-0 md:p-2 rounded-sm cursor-pointer"
          name="isbestSeller"
          onChange={onstatusvaluechanged}
        >
          <option value="Best Seller">Best Seller</option>
          <option value="Just In">Just In</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSelectFunction;
