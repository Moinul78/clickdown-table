import React, { useRef, useState } from 'react';
import { cancel, timeIcon } from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function Estimate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [estimateTime, setEstimateTime] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const getTime = () => {
    const text = document.getElementById('time');
    const time = text.value;

    console.log(time);

    const estimate = document.getElementById('estimateTime');
    estimate.innerText = `${time} Hours`;
    return time;
    // text.value = '';
  };
  const setTime = () => {
    const time = getTime();
    setEstimateTime(time);
  };
  const clearTime = () => {
    const text = document.getElementById('time');
    text.value = '';

    const estimate = document.getElementById('estimateTime');
    estimate.innerText = '';
    setEstimateTime('');
  };

  const handleStates = () => {
    clearTime();
  };

  return (
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="w-6 h-6">
        {
          estimateTime
            ? (
              <p className="text-[0.688rem] text-center text-slate-600 font-semibold">
                {estimateTime}
                h
              </p>
            )
            : (<SVGIcon Icon={timeIcon} />)
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[12.063rem] h-auto left-1/3 top-6 bg-white shadow-2xl rounded-md">
            <div className="bg-slate-50 flex justify-between items-center p-2">
              <p className="text-[0.688rem] text-slate-600 font-semibold">Time Estimate: </p>
              <input id="time" onInput={getTime} className="w-20 h-6 border border-slate-300" type="text" />
              <SVGIcon onClick={handleStates} className="justify-end mb-10" Icon={cancel} />
            </div>

            <div className="flex justify-between p-2">
              <p onClick={setTime} role="contentinfo" onKeyDown={() => { }} id="estimateTime">
                { }
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}
