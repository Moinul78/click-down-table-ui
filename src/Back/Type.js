import React from 'react';
import arrow from "./Assets/arrow.svg"
const Type = () => {
  return (
    <div className="flex items-center mr-[2.875rem]">
      <div className="mr-[0.891rem] w-[1.25rem] h-[1.5rem] py-[0.625rem] font-semibold">type
      </div>
      <div className="w-[1.25rem] h-[1.25rem] pt-[0.7rem]">
        <img src={arrow}></img>
      </div>
    </div>
  );
};

export default Type;