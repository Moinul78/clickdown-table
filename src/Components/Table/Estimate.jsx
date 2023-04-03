import React, { useRef, useState } from 'react';
import { cancel, timeIcon } from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function Estimate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [estimateTime, setEstimateTime] = useState(false);
  const [timeget, setTimeGet] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const setTime = () => {
    setOpenPopUp(false);
    setEstimateTime(timeget);
    setModalOpen(false);
  };
  const clearTime = () => {
    const text = document.getElementById('time');
    text.value = '';
    setEstimateTime('');
    setTimeGet(false);
    setOpenPopUp(false);
  };
  const handleChange = (event) => {
    const time = event.target.value;
    if (time === '') {
      setTimeGet(false);
      setOpenPopUp(false);
      return;
    }
    if (time >= 0) {
      setTimeGet(time);
      setOpenPopUp(true);
    } else if (timeget === null) {
      setOpenPopUp(false);
    }
  };
  return (
    <div className="flex flex-row justify-center items-start relative cursor-pointer">
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
              <input id="time" type="Number" autoComplete="off" onChange={handleChange} className="w-20 h-6 border border-slate-300 outline-none " />
              <SVGIcon onClick={clearTime} className="" Icon={cancel} />
            </div>

            {openPopUp && (
              <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[6.063rem] h-auto flex justify-center items-center left-1/2 top-12 p-2 bg-white shadow-2xl rounded-md">
                <p onClick={setTime} role="contentinfo" onKeyDown={() => { }} id="estimateTime">
                  {
                    timeget
                      ? (
                        <>
                          {timeget}
                          <span className="ml-1"> Hour</span>
                        </>
                      )
                      : {}
                  }
                </p>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
}
