import React from 'react';
import {
  IssueTypesIcon,
  arrowDownIcon,
  arrowRightIcon,
  circleIcon,
  dragIcon,
  editIcon,
  plusIcon,
  subtaskIcon,
  tagIcon,
} from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from './CalendarData';
import Estimate from './Estimate';
import DropDown from './DropDown';
import Priority from './Priority';
import SelectUser from './SelectUser';
import SprintPoint from './SprintPoints';
import SubTask from './SubTask';
import styles from './Table.module.css';

export default function ContentBody({ state, value }) {
  const valueOfRow = value;
  console.log(valueOfRow);
  const { showSubTask, setShowSubTask } = state;
  const { showTask, setShowTask } = state;

  return (
    <tbody>
      <tr className={`hover:bg-slate-50 ${styles.tableRow}`}>
        <td>
          <div>
            {/* col-1 */}
            <div className="flex flex-row justify-center items-center gap-x-2">
              <SVGIcon Icon={circleIcon} />
              <SVGIcon Icon={dragIcon} />
              {
                valueOfRow <= 2
                  ? (
                    <div onClick={() => setShowSubTask(!showSubTask)} role="contentinfo" onKeyDown={() => { }}>
                      {
                        showSubTask ? (<SVGIcon Icon={arrowDownIcon} />)
                          : (<SVGIcon Icon={arrowRightIcon} />)
                      }
                    </div>
                  )
                  : (
                    <div onClick={() => setShowTask(!showTask)} role="contentinfo" onKeyDown={() => { }}>
                      {
                        showTask ? (<SVGIcon Icon={arrowDownIcon} />)
                          : (<SVGIcon Icon={arrowRightIcon} />)
                      }
                    </div>
                  )
              }
            </div>
          </div>
        </td>
        <td className="w-[43px]">
          <div className="w-6 h-6 rounded-md bg-primary flex flex-row justify-center items-center">
            <SVGIcon Icon={IssueTypesIcon} />
          </div>
        </td>
        <td className="w-[500px]">
          <div className="flex flex-row justify-start items-center gap-x-2">
            <h3 className="text-heading text-sm font-medium">Custom Integration</h3>
            <div className="flex flex-row items-center">
              <SVGIcon Icon={subtaskIcon} />
              <p className="text-slate-500 font-medium text-[0.688rem] ml-[0.3rem]">{valueOfRow}</p>
            </div>
            <SVGIcon className={`${styles.summaryIcons}`} Icon={plusIcon} />
            <SVGIcon className={`${styles.summaryIcons}`} Icon={tagIcon} />
            <SVGIcon className={`${styles.summaryIcons}`} Icon={editIcon} />
          </div>
        </td>
        <td className="w-[70px]">
          <SelectUser />
        </td>
        <td className="w-[113px]">
          <DropDown />
        </td>
        <td className="w-[85px]">
          <CalendarData />
        </td>
        <td className="w-[105px]">
          <Estimate />
        </td>
        <td className="w-[136px]">
          <SprintPoint />
        </td>
        <td className="w-[100px]">
          <Priority />
        </td>
      </tr>
      {
        showSubTask
        && [1, 2].map((i) => <tr><SubTask key={i} /></tr>)
      }
      {
        showTask
        && [1, 2, 3].map((i) => <tr><SubTask key={i} /></tr>)
      }

    </tbody>
  );
}
