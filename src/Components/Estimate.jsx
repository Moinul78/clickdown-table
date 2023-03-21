import React, { useState } from 'react';
import { timeIcon } from '../Assets/SVGcomponents';
import SVGIcon from '../SVGIcon/SVGIcon';

export default function Estimate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [estimateTime, setEstimateTime] = useState(false);

  const getTime = () => {
    const text = document.getElementById('time');
    const time = text.value;

    console.log(time);

    const estimate = document.getElementById('estimateTime');
    estimate.innerText = `${time} Hours`;
    setEstimateTime(time);
    // text.value = '';
  };
  const clearTime = () => {
    const text = document.getElementById('time');
    text.value = '';

    const estimate = document.getElementById('estimateTime');
    estimate.innerText = '';
    setEstimateTime('');
  };
  return (
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="w-6 h-6">
        {
          estimateTime
            ? (
              <p>
                {estimateTime}
                h
              </p>
            )
            : (<SVGIcon Icon={timeIcon} />)
        }
      </div>
      {
        modalOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[12.063rem] h-auto left-1/3 top-6 bg-white shadow-xl rounded-md">
            <div className="bg-slate-50 flex justify-between items-center p-2">
              <p className="text-[0.688rem] text-slate-600 font-semibold">Time Estimate: </p>
              <input id="time" onInput={getTime} className="w-20 h-6 border border-slate-300" type="text" />
            </div>

            <div className="flex justify-between">
              <p id="estimateTime">
                { }
              </p>
              {
                estimateTime
                  ? (<button onClick={clearTime} className="p-1 rounded-lg text-red-600">Clear</button>) : (<button>{ }</button>)
              }
            </div>

          </div>
        )
      }
    </div>
  );
}
