import React from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  ThreeDotIcon,
  audioCallIcon,
  videoCallIcon,
} from '../../../Assets/SVGcomponents';
import img1 from '../../../Assets/Images/img1.jpg';

export default function ChatBoxHeader() {
  return (
    <div className="flex justify-between mb-[1rem] mt-1">
      <div className="flex flex-row">
        <img src={img1} className="w-[2.5rem] h-[2.5rem] mr-[0.75rem]" alt="" />
        <div>
          <p className="font-bold text-sm leading-4 text-[#0F172A] pb-1 cursor-pointer">Moinul Islam</p>
          <p className="text-[#22C55E] font-medium text-[12px]">Typing...</p>
        </div>
      </div>
      <div className="flex flex-row items-center cursor-pointer">
        <SVGIcon Icon={audioCallIcon} />
        <SVGIcon Icon={videoCallIcon} />
        <SVGIcon Icon={ThreeDotIcon} />
      </div>
    </div>
  );
}
