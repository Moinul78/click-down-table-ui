import React from 'react';
import circle from "./Assets/circle.svg"
import ArrowRight from "./Assets/ArrowRight.svg"

const Icons = () => {
  return (
    <div className='flex items-center'>
      <div className="ml-[0.958rem]">
        <img src={circle}></img>
      </div>
      <div className="ml-[0.958rem]">
        <img src={ArrowRight}></img>
      </div>
    </div>
  );
};

export default Icons;