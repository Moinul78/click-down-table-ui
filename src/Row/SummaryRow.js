import React from 'react';
import SubTask from "./Assets/SubTask.svg"
import PlusSign from "./Assets/PlusSign.svg"
import Frame83 from "./Assets/Frame83.svg"
import Frame85 from "./Assets/Frame85.svg"

const SummaryRow = () => {
  return (
    <div className="flex items-center">
      <div className="mr-[0.375rem]">
        <p className='font-semibold'>Custom Integration</p>
      </div>
      <div className='mr-[0.375rem]'>
        <img src={SubTask}></img>
      </div>
      <div className='mr-[0.375rem]'>
        <p>1</p>
      </div>
      <div className='mr-[0.375rem]'>|</div>
      <div>
        <img src={PlusSign}></img>
      </div>
      <div className='ml-[0.917rem]'>
        <img src={Frame83}></img>
      </div>
      <div className="ml-[0.5rem]">
        <img src={Frame85}></img>
      </div>
    </div>
  );
};

export default SummaryRow;