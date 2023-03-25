import React from 'react';
import {
  circleIcon,
  dragIcon, IssueTypesIcon,
} from '../../Assets/SVGcomponents';
import { subData } from '../../data';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import DropDown from './DropDown';
import Estimate from './Estimate';
import IssueTypes from './IssueTypes';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';
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
  const handleTask = (d) => {
    const subTasksWrapper = document.getElementById(`${d.id}subtasks`);
    subTasksWrapper.style.display = 'block';
  };

  return (
    <div className={`hover:bg-slate-50 ${styles.tableRow}`}>
      <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2">
        <div className="flex justify-center items-center ">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center gap-x-2">
            <SVGIcon Icon={circleIcon} />
            <SVGIcon Icon={dragIcon} />
            <div onClick={() => handleTask(data)} role="contentinfo" onKeyDown={() => { }}>
              <SVGIcon Icon={data.ArrowRight} />
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="flex flex-row justify-center items-center w-[3rem]">
          <SVGIcon Icon={IssueTypesIcon} />
        </div>
        {/* col-3 */}
        <div className="col-span-4 flex flex-row justify-start items-center gap-x-2 ml-[-3rem]">
          <h3 className="text-heading text-sm font-medium leading-6">{data.text}</h3>
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
      <div id={`${data.id}subtasks`} style={{ display: 'none' }}>
        {
          data.subTask?.map((datas) => (
            (
              <div key={datas.id}>
                <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-200 py-2 duration-500">
                  {/* col-1 */}
                  <div className="grid justify-center items-center">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                      <SVGIcon className="invisible" Icon={datas.circleIcon} />
                      <SVGIcon className="invisible" Icon={datas.dragIcon} />
                      <div onClick={console.log('clicked')} role="contentinfo" onKeyDown={() => { }}>
                        <SVGIcon Icon={datas.ArrowRight} />
                      </div>
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
        {/* {
          console.log(subData[showSubTask]?.subTask[childData]?.child)
        } */}

      </div>
    </div>
  );
}
