import React from 'react';
import { searchIcon } from '../../../Assets/SVGcomponents';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import PinnedMessage from './PinnedMessage';
import RecentMessage from './RecentMessage';

export default function MessageList() {
  return (
    <div className="h-screen p-[1.25rem] bg-[#F8FAFC] border-r-[1px] border-[#E2E8F0]">
      <div className="w-full mb-[32px]">
        <p className="text-lg font-semibold leading-5 text-[#6239ED]">Message</p>
        <div className="mt-[32px]">
          <div className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SVGIcon className="w-[20px] h-[20px]" Icon={searchIcon} />
            </span>
            <input autoComplete="off" className="placeholder:text-slate-600 text-sm font-medium block bg-white w-full border-0 rounded-md py-[0.688rem] pl-9 pr-3 focus:outline-none focus:border-[#6239ED] focus:ring-[#6239ED] focus:ring-1 sm:text-sm focus:text-[#6239ED]" placeholder="Search" type="text" name="search" />
          </div>
        </div>
      </div>
      <PinnedMessage />
      <div>
        <RecentMessage />
      </div>
    </div>
  );
}
