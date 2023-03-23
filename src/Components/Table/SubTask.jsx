import React from 'react';
import {
  arrowDownIcon,
  circleIcon,
  dragIcon,
} from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import DropDown from './DropDown';
import Priority from './Priority';
import IssueTypes from './IssueTypes';
import SprintPoint from './SprintPoints';
import CalendarData from './CalendarData';
import Estimate from './Estimate';
import SelectUser from './SelectUser';

export default function SubTask() {
  return (
    <>
      <td>
        <div>
          {/* col-1 */}
          <div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <SVGIcon className="invisible" Icon={circleIcon} />
              <SVGIcon className="invisible" Icon={dragIcon} />
              <SVGIcon Icon={arrowDownIcon} />
            </div>
          </div>
        </div>
      </td>
      <td className="flex justify-start items-center mt-4">
        <IssueTypes />
      </td>
      <td>
        <div className="flex flex-row justify-start items-start gap-x-2">
          <p className="text-slate-600 font-normal text-sm text-justify">
            As a new Certified ScrumMaster, once my name has been loaded to the registry
            I am sent an email welcoming me to the Scrum Alliance and containing
            instructions on how to register/activate my membership
          </p>
        </div>
      </td>
      <td>
        <div className="flex flex-row justify-center items-start">
          <SelectUser />
        </div>
      </td>
      <td>
        <DropDown />
      </td>
      <td>
        <CalendarData />
      </td>
      <td>
        <Estimate />
      </td>
      <td>
        <SprintPoint />
      </td>
      <td>
        <Priority />
      </td>
    </>
  );
}
