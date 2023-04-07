import React from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  ThreeDotIcon,
  audioCallIcon,
  avatar2,
  videoCallIcon,
} from '../../../Assets/SVGcomponents';

export default function ChatBoxHeader() {
  return (
    <div className="flex justify-between mb-[1rem]">
      <div className="flex flex-row">
        <SVGIcon className="w-[2.5rem] h-[2.5rem] mr-[0.75rem]" Icon={avatar2} />
        <div>
          <p className="font-semibold text-sm leading-4 text-[#0F172A] pb-1">Moinul Islam</p>
          <p className="text-[#22C55E] font-medium text-[12px]">Typing...</p>
        </div>
      </div>
      <div className="flex">
        <SVGIcon Icon={audioCallIcon} />
        <SVGIcon Icon={videoCallIcon} />
        <SVGIcon Icon={ThreeDotIcon} />
      </div>
    </div>
  );
}
