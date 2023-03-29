import React from 'react';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import DropDown from './DropDown';
import Estimate from './Estimate';
import IssueTypes from './IssueTypes';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';

function ChildTask({ childData }) {
  console.log(childData);
  return (
    <div key={childData.id}>
      <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2 duration-500 cursor-pointer">
        {/* col-1 */}
        <div className="flex justify-center items-center cursor-pointer">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <SVGIcon className="invisible" Icon={childData.circleIcon} />
            <SVGIcon className="invisible" Icon={childData.dragIcon} />
            <div>
              <SVGIcon Icon={childData.ArrowRight} />
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="grid justify-start items-center w-[3rem]">
          <IssueTypes />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-start gap-x-2 ">
          <p className="text-slate-600 font-normal text-sm text-justify ml-[2rem]">
            {childData.details}
          </p>
        </div>
        {/* col-4 */}
        <div className="grid justify-center items-center">
          <SelectUser />
        </div>
        {/* col-5 */}
        <div className="grid justify-center items-center">
          <DropDown />
        </div>
        {/* col-6 */}
        <div className="grid justify-center items-center">
          <CalendarData />
        </div>
        {/* col-7 */}
        <div className="grid justify-center items-center">
          <Estimate />
        </div>
        {/* col-8 */}
        <div className="grid justify-center items-center">
          <SprintPoint />
        </div>
        {/* col-9 */}
        <div className="grid justify-center items-center">
          <Priority />
        </div>
      </div>
    </div>
  );
}
export default ChildTask;
