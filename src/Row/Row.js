import React from 'react';
import Icons from '../Back/Icons';
import ArrowRight from './ArrowRight';
import IssueTypes from './IssueTypes';
import "../Back/Back.css"
import SummaryRow from './SummaryRow';

const Row = () => {
  return (
    <div className=" back mt-[1.438rem]">
      <div><Icons /></div>
      <div>
        <IssueTypes />
      </div>
      <div>
        <SummaryRow />
      </div>
    </div>
  );
};

export default Row;