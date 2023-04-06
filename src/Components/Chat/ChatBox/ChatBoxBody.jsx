import React from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  PlayCircleIcon,
  VoiceMessage,
  avatar2,
} from '../../../Assets/SVGcomponents';

export default function ChatBoxBody() {
  return (
    <div className="mt-[3rem]">
      <div className="flex justify-between w-[20.813rem]">
        <div className="flex flex-row">
          <div>
            <SVGIcon className="w-[2rem] h-[2rem] mr-[0.75rem]" Icon={avatar2} />
          </div>
          <div className="bg-[#F8FAFC] border rounded p-[0.5rem]">
            <div className="flex flex-row justify-between">
              <p className="text-[#0F172A] text-sm font-medium leading-4">Moinul Islam</p>
              <p className="text-[#64748B] font-semibold text-sm leading-4">4.55PM</p>
            </div>
            <p className="w-full h-auto font-normal text-[#64748B] text-xs mt-[0.5rem] leading-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end mt-[0.5rem]">
        <div className="flex flex-row ">
          <div className="bg-[#6239ED] border rounded p-[0.5rem]">
            <div className="flex flex-row justify-between">
              <p className="text-[#FFFFFF] text-sm font-medium leading-4">Moinul Islam</p>
              <p className="text-[#CBD5E1] font-semibold text-sm leading-4">4.55PM</p>
            </div>
            <div className="flex justify-center items-center mt-[0.5rem]">
              <SVGIcon className="" Icon={PlayCircleIcon} />
              <SVGIcon className="" Icon={VoiceMessage} />
            </div>
          </div>
          <div>
            <SVGIcon className="w-[2rem] h-[2rem] ml-[0.75rem]" Icon={avatar2} />
          </div>
        </div>
      </div>
    </div>
  );
}
