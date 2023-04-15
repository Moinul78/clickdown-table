import React, { useState } from 'react';
import { circleIcon } from '../../Assets/SVGcomponents';
import { subData } from '../../data';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import DropDown from './DropDown';
import Estimate from './Estimate';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';
import SubTask from './SubTask';
import styles from './Table.module.css';

export default function ContentBody() {
  return (
    <div>
      {
        subData.map((data) => (
          <Row key={data.id} data={data} />
        ))
      }
    </div>
  );
}
function Row({ data }) {
  const [showSubTask, setShowSubTask] = useState([]);
  const [expand, setExpand] = useState(false);
  const handleTask = (d) => {
    setShowSubTask(d.id);
    setExpand(!expand);
  };
  return (
    <div className={`${styles.tableRow}`}>
      <div className="grid grid-cols-12 h-[56px] border-0 border-b-[0.063rem] hover:bg-[#6239ED] hover:bg-opacity-10 border-[#E2E8F0] py-2">
        <div className="flex justify-center items-center cursor-pointer">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <SVGIcon Icon={circleIcon} />
            <SVGIcon Icon={data.dragIcon} />
            <div className="w-[20px] h-[20px]" onClick={() => handleTask(data)} role="contentinfo" onKeyDown={() => { }}>
              {
                expand ? (<SVGIcon Icon={data.arrowDownIcon} />)
                  : (<SVGIcon Icon={data.ArrowRight} />)
              }
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="flex flex-row justify-start items-center w-[3rem] ml-[-0.5rem]">
          <SVGIcon Icon={data.issueTypesIcon} />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-center gap-x-2 ml-[-4.5rem] cursor-pointer">
          <h3 className="text-[#0F172A] text-sm font-medium leading-6">{data.text}</h3>
          <div className="flex flex-row items-center">
            <SVGIcon Icon={data.subTaskIcon} />
            <p className="text-slate-500 font-medium text-[0.688rem]">{data.subTaskQuantity}</p>
          </div>
          <SVGIcon className={`${styles.summaryIcons}`} Icon={data.plusIcon} />
          <SVGIcon className={`${styles.summaryIcons}`} Icon={data.tagIcon} />
          <SVGIcon className={`${styles.summaryIcons}`} Icon={data.editIcon} />
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
        expand
        && subData[showSubTask]?.subTask?.map((subtasks) => (
          <SubTask subtasks={{ subtasks, showSubTask }} key={subtasks.id} />
        ))
      }
    </div>
  );
}
