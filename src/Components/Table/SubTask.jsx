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
    console.log('clicked');
    setChildId(d.id);
    console.log(open);
    setOpen(!open);
    console.log(open);
  };
  return (
    <div key={subtasks.subtasks.id}>
      <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2 duration-500">
        {/* col-1 */}
        <div className="grid justify-end items-center">
          <SVGIcon className="invisible" Icon={subtasks.subtasks.circle} />
          <SVGIcon className="invisible" Icon={subtasks.subtasks.dragIcon} />
          <div className=" ml-[-1.3rem] mt-[-3.3rem]" onClick={() => handleSubtaskChild(subtasks.subtasks)} role="contentinfo" onKeyDown={() => { }}>
            {
              open ? (<SVGIcon Icon={subtasks.subtasks.downArrow} />)
                : (<SVGIcon Icon={subtasks.subtasks.rightArrow} />)
            }
          </div>
        </div>
        {/* col-2 */}
        <div className="grid justify-start items-center ml-[0.7rem]">
          <IssueTypes />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-start gap-x-2 ">
          <p className="text-slate-600 font-normal text-sm text-justify">
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
