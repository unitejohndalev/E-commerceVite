/* eslint-disable react/prop-types */
import React from "react";

const FilterSelectFunction = (props) => {
  //destructure props
  function onstatusvaluechanged(event) {
    props.filterValueSelected(event.target.value);
  }
  return (
    <div className=" relative">
      <div className="absolute -top-5 ">
        <select
          className="outline-none p-2 rounded-lg cursor-pointer"
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
