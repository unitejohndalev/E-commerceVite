import React from 'react'
import AccFilteredList from './AccFilteredList';

const AccMain = () => {
  return (
    <div className="relative">
      <div className="max-w-[1240px] top-0 absolute">
        <button className="absolute z-10 left-[398px] btn-bg px-5 py-2 rounded-sm text-white">
          Accessories
        </button>
      </div>

      <AccFilteredList />
    </div>
  );
}

export default AccMain