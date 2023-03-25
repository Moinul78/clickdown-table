import React, { useState } from 'react';
import {
  IssueTypesIcon,
  circleIcon,
  dragIcon,
} from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import Estimate from './Estimate';
import DropDown from './DropDown';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';
import styles from './Table.module.css';
import { subData } from '../../data';
import IssueTypes from './IssueTypes';

export default function ContentBody() {
  return (
    <div>
      {
        subData.map((data) => (
          <Row data={data} />
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
    <div key={data.id} className={`hover:bg-slate-50 ${styles.tableRow}`}>
      <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2">
        <div className="flex justify-center items-center ">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <SVGIcon Icon={circleIcon} />
            <SVGIcon Icon={dragIcon} />
            <div onClick={() => handleTask(data)} role="contentinfo" onKeyDown={() => { }}>
              {
                expand ? (<SVGIcon Icon={data.arrowDownIcon} />)
                  : (<SVGIcon Icon={data.ArrowRight} />)
              }
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="flex flex-row justify-center items-center w-[3rem]">
          <SVGIcon Icon={IssueTypesIcon} />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-center gap-x-2 ml-[-3rem]">
          <h3 className="text-heading text-sm font-medium">{data.text}</h3>
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
      <div id="task">
        {
          expand
          && subData[showSubTask]?.subTask?.map((datas) => (
            (
              <div key={datas.id}>
                <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2 duration-500">
                  {/* col-1 */}
                  <div className="grid justify-center items-center">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                      <SVGIcon className="invisible" Icon={datas.circleIcon} />
                      <SVGIcon className="invisible" Icon={datas.dragIcon} />
                      <SVGIcon Icon={datas.ArrowRight} />
                    </div>
                  </div>
                  {/* col-2 */}
                  <div className="grid justify-center items-center ml-[-4rem]">
                    <IssueTypes />
                  </div>
                  {/* col-3 */}
                  <div className="col-span-4 flex flex-row justify-start items-start gap-x-2 ">
                    <p className="text-slate-600 font-normal text-sm text-justify">
                      {datas.details}
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
            )
          ))
        }
      </div>
    </div>
  );
}
