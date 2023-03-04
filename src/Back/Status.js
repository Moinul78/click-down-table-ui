import React from 'react';
import arrow from "./Assets/arrow.svg";

const Status = () => {
  return (
    <div className="flex items-center"><div className="mr-[0.6rem] w-[2.688rem] h-[1.5rem] py-[0.625rem] font-semibold">Status</div>
      <div className=" w-[1.25rem] h-[1.25rem] pt-[0.7rem]">
        <img src={arrow}></img>
      </div></div>
  );
};

export default Status;