import React, { useState } from 'react';
import { addUserIcon, arrowDownIcon, arrowRightIcon, arrowUpDownIcon, avatar1, circleIcon, dragIcon, editIcon, flagIcon, flashIconOne, plusIcon, starCircleIcon, subtaskIcon, tagIcon, timeIcon } from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import DropDown from './DropDown';
import IssueTypes from './IssueTypes';

export default function SubTask(props) {

  return (
    <>
      <td>
        <div className=''>
          {/* col-1 */}
          <div>
            <div className='flex flex-row justify-center items-center gap-x-2'>
              <SVGIcon className='invisible' Icon={circleIcon} />
              <SVGIcon className='invisible' Icon={dragIcon} />
              <SVGIcon Icon={arrowDownIcon} />
            </div>
          </div>
        </div>
      </td>
      <td className='flex justify-start items-center mt-4'>
        <IssueTypes />
      </td>
      <td>
        <div className=' flex flex-row justify-start items-start gap-x-2 '>
          <p className='text-slate-600 font-normal text-sm text-justify'>
            As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership
          </p>
        </div>
      </td>
      <td>
        <div className=' flex flex-row justify-center items-start'>
          <SVGIcon className="w-6 h-6" Icon={avatar1} />
        </div>
      </td>
      <td>
        <DropDown />
      </td>
      <td>
        <div className='flex flex-row justify-center items-start'>
          <p className='text-slate-600 text-sm font-medium '>15 Mar</p>
        </div>
      </td>
      <td>
        <div className='flex flex-row justify-center items-start'>
          <SVGIcon Icon={timeIcon} />
        </div>
      </td>
      <td>
        <div className='flex flex-row justify-center items-start'>
          <div className='flex flex-row items-center gap-x-[0.354rem]'>
            <SVGIcon Icon={starCircleIcon} />
            <p className='text-slate-500 font-medium text-[0.688rem]'>5</p>
          </div>
        </div>
      </td>
      <td>
        <div className='flex flex-row justify-center items-start'>
          <SVGIcon Icon={flagIcon} />
        </div>
      </td>
    </>
  );
}


