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
import IssueTypes from '../Row/IssueTypes';
import SummaryRow from '../Row/SummaryRow';
import AssigneeRow from '../Row/AssigneeRow';
import StatusRow from '../Row/StatusRow';
import DueRow from '../Row/DueRow';
import EstimateRow from '../Row/EstimateRow';
import SprintPointRow from '../Row/SprintPointRow';
import PriorityRow from '../Row/PriorityRow';


const Back = () => {
  return (
    <section className="grid grid-cols-12">
      <div className="mt-[0.8rem] ">
        <div><Icons /></div>
        <div className="mt-8"><Icons /></div>
      </div>
      <div className="">
        <div><Type /></div>
        <div className='mt-8'> <IssueTypes></IssueTypes></div>
      </div>
      <div className="grid justify-left col-span-4">
        <div><Summary /></div>
        <div className='mt-8'><SummaryRow></SummaryRow></div>
      </div>
      <div className="grid justify-items-center">
        <div><Assignee /></div>
        <div className='mt-8'><AssigneeRow /></div>
      </div>
      <div className="grid justify-items-center">
        <div><Status /></div>
        <div className='mt-8'><StatusRow /></div>
      </div>
      <div className="grid justify-items-center">
        <div><Due /></div>
        <div className='mt-8'><DueRow /></div>
      </div>
      <div className="grid justify-items-center">
        <div> <Estimate /></div>
        <div className='mt-8'><EstimateRow /></div>
      </div>
      <div className="grid justify-items-center">
        <div> <SprintPoints /></div>
        <div className='mt-8'><SprintPointRow /></div>
      </div>
      <div className="grid justify-items-center">
        <div> <Priority /></div>
        <div className='mt-8'><PriorityRow /></div>
      </div>
    </section >
  );
};

export default Back;