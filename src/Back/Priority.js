import React from 'react';
import arrow from "./Assets/arrow.svg";

const Priority = () => {
  return (
    <div className="flex items-center"><div className=" w-[3.188rem] h-[1.5rem] mr-[0.891rem] py-[0.625rem] font-semibold">Priority</div>
      <div className="w-[1.25rem] h-[1.25rem] pt-[0.7rem]">
        <img src={arrow}></img>
      </div></div>
  );
};

export default Priority;