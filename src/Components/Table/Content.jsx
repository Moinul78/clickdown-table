import React, { useState } from 'react';
import { arrowUpDownIcon, circleIcon } from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import ContentBody from './ContentBody';

import styles from './Table.module.css';

export default function Content() {
  const [showTask, setShowTask] = useState(false);
  const [showSubTask, setShowSubTask] = useState(false);
  const [task, setTask] = useState(false);
  return (
    <div>
      <div className="pl-10">
        <table className="w-full">
          <thead>
            <tr className="text-slate-500 font-medium text-[0.688rem] border-0 border-b-[0.063rem] border-slate-100">
              <th className="py-[1.25rem] w-[30px]">
                <SVGIcon Icon={circleIcon} />
              </th>
              <th className="w-[43px]">
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <p className={`${styles.tableHeadTitle}`}>TYPE</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[500px]">
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <p className={`${styles.tableHeadTitle}`}>SUMMARY</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[70px]">
                <div className="flex flex-row justify-center items-center pl-4">
                  <p className={`${styles.tableHeadTitle}`}>ASSIGNEE</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[113px]">
                <div className="flex flex-row justify-center items-center w-[8rem]">
                  <p className={`${styles.tableHeadTitle}`}>STATUS</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[85px]">
                <div className="flex flex-row justify-center items-center pl-3">
                  <p className={`${styles.tableHeadTitle}`}>DUE</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[105px]">
                <div className="flex flex-row justify-center items-center">
                  <p className={`${styles.tableHeadTitle}`}>ESTIMATE</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[136px]">
                <div className="flex flex-row justify-center items-center">
                  <p className={`${styles.tableHeadTitle}`}>SPRINT POINTS</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
              <th className="w-[100px]">
                <div className="flex flex-row justify-center items-center">
                  <p className={`${styles.tableHeadTitle}`}>PRIORITY</p>
                  <SVGIcon className={`${styles.tableHeadIcon}`} Icon={arrowUpDownIcon} />
                </div>
              </th>
            </tr>
          </thead>
          <ContentBody state={{ task, setTask }} value={0} />
          <ContentBody state={{ showSubTask, setShowSubTask }} value={2} />
          <ContentBody state={{ showTask, setShowTask }} value={3} />
        </table>
      </div>
    </div>
  );
}
