import React from 'react';

const StatusRow = () => {

  return (
    <div className='font-semibold'>
      <select>
        <option><div className="pr-1"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="#FE7317" />
        </svg>
        </div>
          <div className="pr-1.7">In Review</div>
          <div><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_413_1509)">
              <path d="M5 6.66667L2.5 4.16667H7.5L5 6.66667Z" fill="#475569" />
            </g>
            <defs>
              <clipPath id="clip0_413_1509">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg></div></option>
        <option>Choice B</option>
        <option>Choice C</option>
      </select>
    </div>
  );
};

export default StatusRow;

/*
<div className="flex justify-center items-center pr-3">
        <div className="pr-1"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="#FE7317" />
        </svg>
        </div>
        <div className="pr-1.7 font-semibold">In Review</div>
        <div><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_413_1509)">
            <path d="M5 6.66667L2.5 4.16667H7.5L5 6.66667Z" fill="#475569" />
          </g>
          <defs>
            <clipPath id="clip0_413_1509">
              <rect width="10" height="10" fill="white" />
            </clipPath>
          </defs>
        </svg></div>
      </div>
*/