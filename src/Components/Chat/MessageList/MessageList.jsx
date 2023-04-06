import React from 'react';
import { searchIcon } from '../../../Assets/SVGcomponents';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import PinnedMessage from './PinnedMessage';
import RecentMessage from './RecentMessage';

export default function MessageList() {
  return (
    <div className="p-[1.25rem] bg-[#F8FAFC] border-r-[1px] border-[#E2E8F0]">
      <p className="text-lg font-semibold leading-5 text-[#6239ED]">Message</p>
      <div className="flex flex-row py-[0.688rem] px-[0.5rem] bg-[#FFFFFF] w-[17.875rem] h-[2.625rem]  mt-[2.438rem]">
        <SVGIcon className="mr-[0.75rem] w-[1.25rem] h-[1.25rem]" Icon={searchIcon} />
        <input className="outline-none" type="text" placeholder="search" />
      </div>
      <PinnedMessage />
      <RecentMessage />
    </div>
  );
}
