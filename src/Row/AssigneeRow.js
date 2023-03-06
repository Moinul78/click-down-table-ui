import React from 'react';
import userAssignee from "./Assets/UserAssignee.png"

const AssigneeRow = () => {
  return (
    <div className="w-[2rem] h-[2rem]">
      <img src={userAssignee}></img>
    </div>
  );
};

export default AssigneeRow;