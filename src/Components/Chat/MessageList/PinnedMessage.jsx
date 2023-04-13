import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { PinnedMessageIcon, arrowRightIcon } from '../../../Assets/SVGcomponents';
import { pinnedMessages } from '../../../data';

export default function PinnedMessage() {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <SVGIcon className="" Icon={PinnedMessageIcon} />
          <p className="text-[#94A3B8] font-medium text-sm leading-5">Pinned Message</p>
        </div>
        <div className="cursor-pointer">
          <SVGIcon onClick={() => setCollapse(!collapse)} className={collapse ? '' : 'rotate-90'} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className="mt-4 w-full">
        {
          collapse && pinnedMessages.slice(0, 3).map((pinnedMessage) => (
            <div key={pinnedMessage.id} className="flex justify-between mb-[8px]">
              <div className="flex flex-row">
                <img className="w-[3rem] h-[3rem] mr-[0.75rem] mt-[-1px]" src={pinnedMessage.avatar} alt="" />
                <div>
                  <p className="font-semibold text-sm  text-[#0F172A] cursor-pointer mb-[2px]">{pinnedMessage.username}</p>
                  {
                    pinnedMessage.isWriting ? <p className="text-[#22C55E] font-medium text-xs mt-[6px]">Typing...</p>
                      : <p className="text-[#475569] font-medium text-xs mt-[6px]">{pinnedMessage.message}</p>
                  }
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#475569] font-semibold text-xs leading-4 cursor-pointer">{pinnedMessage.time}</p>
                {
                  pinnedMessage.unseen
                    ? <p className="flex justify-end bg-[#FF754C] w-5 h-5 text-[10px] text-semibold text-[#FFFFFF] pl-2 pr-[7px] py-[3px] ml-7 rounded-full cursor-pointer my-1.5">{pinnedMessage.unseen}</p>
                    : ''
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
