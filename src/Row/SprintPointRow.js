import React from 'react';
import StarCircle from "./Assets/StarCircle.svg"

const SprintPointRow = () => {
  return (
    <div className="flex items-center">
      <div className='mr-[0.25rem]'>
        <img src={StarCircle}></img>
      </div>
      <div>5</div>
    </div>
  );
};

export default SprintPointRow;