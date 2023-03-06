import React from 'react';
import Icons from '../Back/Icons';
import IssueTypes from './IssueTypes';
import SummaryRow from './SummaryRow';
import AssigneeRow from './AssigneeRow';
import StatusRow from './StatusRow';
import DueRow from './DueRow';
import EstimateRow from './EstimateRow';
import SprintPointRow from './SprintPointRow';
import PriorityRow from './PriorityRow';

const Row = () => {
  return (
    <div className="back mt-[1.438rem]">
      <div><Icons /></div>
      <div>
        <IssueTypes />
      </div>
      <div>
        <SummaryRow />
      </div>
      <div>
        <AssigneeRow />
      </div>
      <div>
        <StatusRow />
      </div>
      <div>
        <DueRow />
      </div>
      <div>
        <EstimateRow />
      </div>
      <div>
        <SprintPointRow />
      </div>
      <div>
        <PriorityRow />
      </div>
    </div>
  );
};

export default Row;