import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  calendar,
  cancel,
} from '../Assets/SVGcomponents';
import SVGIcon from '../SVGIcon/SVGIcon';
// import './CalendarData.css'
export default function CalendarData() {
  const [dateOpen, setDateOpen] = useState(false);
  // const months = ['January', 'February', 'March', 'April', 'May', 'June',
  //   'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = ['31', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22',
    '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3'];

  return (
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setDateOpen(!dateOpen)} role="contentinfo" onKeyDown={() => setDateOpen(!dateOpen)} className="w-6 h-6">
        <SVGIcon Icon={calendar} />
      </div>
      {
        dateOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[25rem] p-5 right-1/3 top-8 h-auto   bg-white rounded-md">

            <div className="flex">
              <div>
                <div className="flex justify-evenly">
                  <div className="">
                    <SVGIcon Icon={ArrowLeft} />
                  </div>

                  <div>
                    <p>v</p>
                  </div>
                  <div>
                    <SVGIcon Icon={ArrowRight} />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-x-4 justify-center items-center">
                  {
                    days.map((day) => (
                      <p>{day}</p>
                    ))
                  }
                </div>
                <div className="grid grid-cols-7 gap-4 justify-center items-center mt-3 ">
                  {
                    dates.map((date) => (
                      <p className="flex justify-center items-center p-1 bg-[#FFFFFF] hover:bg-[#6239ED] hover:text-[#FFFFFF] rounded">{date}</p>
                    ))
                  }
                </div>
              </div>
              <div className="ml-5 w-[10rem]">
                <div className="flex justify-end">
                  <SVGIcon Icon={cancel} />
                </div>
                <div>
                  <p className="font-Inter font-medium">Project Deadline</p>
                </div>
                <div>
                  <p className="text-[#6239ED] font-semibold leading-4">Total 7 Days</p>
                </div>
                <div className="flex gap-2 justify-left items-center p-[6px]">
                  <div>
                    <SVGIcon Icon={calendar} />
                  </div>
                  <div>
                    <p>Start Date</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-left items-center p-[6px]">
                  <div>
                    <SVGIcon Icon={calendar} />
                  </div>
                  <div>
                    <p>End Date</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="bg-[#6239ED] text-[#FFFFFF] text-center rounded p-[6px]">Set Date</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
