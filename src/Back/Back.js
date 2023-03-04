import React from 'react';
import Assignee from './Assignee';
import Icons from './Icons';
import Summary from './Summary';
import Type from './Type';
import Status from './Status';
import Due from "./Due";
import Estimate from "./Estimate";
import SprintPoints from "./SprintPoints";
import Priority from "./Priority"
import './Back.css';


const Back = () => {
  return (
    <section className="back h-[2.688rem]">
      <div className="mt-[1.558rem]">
        <Icons />
      </div>
      <Type className="" />
      <Summary className="" />
      <Assignee className="" />
      <Status className=" " />
      <Due />
      <Estimate />
      <SprintPoints />
      <Priority />
    </section>
  );
};

export default Back;