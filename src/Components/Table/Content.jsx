import React from 'react';
import {
  arrowUpDownIcon,
  circleIcon,
} from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import ContentBody from './ContentBody';
import styles from './Table.module.css';

export default function Content() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 border-0 border-b-[0.063rem] border-slate-100 py-5 text-slate-500 font-medium text-[0.688rem]">
          {/* col-1 */}
          <div className="flex flex-row justify-center items-center ml-[-3.5rem]">
            <SVGIcon Icon={circleIcon} />
          </div>
          {/* col-2 */}
          <div className="flex flex-row justify-center items-center w-[3rem] ml-[0.6rem]">
            <p className={`${styles.tableHeadTitle}`}>TYPE</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-3 */}
          <div className="col-span-4 flex flex-row justify-start items-center ml-[-3rem]">
            <p className={`${styles.tableHeadTitle}`}>SUMMARY</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-4 */}
          <div className="flex flex-row justify-center items-center ml-[0.5rem]">
            <p className={`${styles.tableHeadTitle}`}>ASSIGNEE</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-5 */}
          <div className="flex flex-row justify-center items-center ">
            <p className={`${styles.tableHeadTitle}`}>STATUS</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-6 */}
          <div className="flex flex-row justify-center items-center ml-[1rem]">
            <p className={`${styles.tableHeadTitle}`}>DUE</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-7 */}
          <div className="flex flex-row justify-center items-center ">
            <p className={`${styles.tableHeadTitle}`}>ESTIMATE</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-8 */}
          <div className="flex flex-row justify-center items-center ">
            <p className={`${styles.tableHeadTitle}`}>SPRINT POINTS</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
          {/* col-9 */}
          <div className="flex flex-row justify-center items-center ">
            <p className={`${styles.tableHeadTitle}`}>PRIORITY</p>
            <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
          </div>
        </div>
      </div>
      <ContentBody />
      { /* Table Body Row 2 */}
    </div>
  );
}
