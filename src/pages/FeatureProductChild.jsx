/* eslint-disable react/prop-types */
import React from 'react'

const FeatureProductChild = (props) => {
    //destructure props
      function onstatusvaluechanged(event) {
        props.filterValueSelected(event.target.value);
      }
  return (
    <div className="">
      <select name="isbestSeller" onChange={onstatusvaluechanged}>
        <option value="Best Seller">Hats Best Seller</option>
        <option value="Just In">Hats Just In</option>
      </select>
    </div>
  );
}

export default FeatureProductChild