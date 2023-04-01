import React, { useState } from 'react';
import { subData } from '../../data';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import ChildTask from './ChildTask';
import DropDown from './DropDown';
import Estimate from './Estimate';
import IssueTypes from './IssueTypes';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';

function SubTask({ subtasks }) {
  const [childId, setChildId] = useState([]);
  const [open, setOpen] = useState(false);
  const handleSubtaskChild = (d) => {
    setChildId(d.id);
    setOpen(!open);
  };
  return (
    <div key={subtasks.subtasks.id}>
      <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2 duration-500">
        {/* col-1 */}
        <div className="flex justify-center items-center cursor-pointer">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <SVGIcon className="invisible" Icon={subtasks.subtasks.circle} />
            <SVGIcon className="invisible" Icon={subtasks.subtasks.dragIcon} />
            <div onClick={() => handleSubtaskChild(subtasks.subtasks)} role="contentinfo" onKeyDown={() => { }}>
              {
                open ? (<SVGIcon Icon={subtasks.subtasks.downArrow} />)
                  : (<SVGIcon Icon={subtasks.subtasks.rightArrow} />)
              }
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="grid justify-start items-center w-[3rem] ml-[-0.5rem]">
          <IssueTypes />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-start ">
          <p className="text-slate-600 font-normal text-sm text-justify ml-[-2.5rem]">
            {subtasks.subtasks.details}
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
      {
        open
        && subData[subtasks.showSubTask]?.subTask[childId]?.child?.map((childData) => (
          <ChildTask childData={childData} key={childData.id} />
        ))
      }
    </div>
  );
}
export default SubTask;
