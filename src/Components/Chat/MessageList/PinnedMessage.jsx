import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { PinnedMessageIcon, arrowRightIcon } from '../../../Assets/SVGcomponents';
import { pinnedMessages } from '../../../data';

export default function PinnedMessage() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="mt-[1.5rem]">
      <div className="flex justify-between items-centerem">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <SVGIcon className="" Icon={PinnedMessageIcon} />
          <p className="text-[#94A3B8] font-medium text-sm leading-5">Pinned Message</p>
        </div>
        <div>
          <SVGIcon onClick={() => setCollapse(!collapse)} className={collapse ? 'rotate-90' : ''} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className="mt-2">
        {
          collapse && pinnedMessages.slice(0, 3).map((pinnedMessage) => (
            <div key={pinnedMessage.id} className="flex justify-between my-2">
              <div className="flex flex-row">
                <SVGIcon className="w-[2rem] h-[2rem] mr-[0.75rem]" Icon={pinnedMessage.avatar} />
                <div>
                  <p className="font-semibold text-sm leading-4 text-[#0F172A]">{pinnedMessage.username}</p>
                  {
                    pinnedMessage.isWriting ? <p className="text-[#22C55E] font-medium text-[12px]">Typing...</p>
                      : <p className="text-[#475569] font-medium text-[12px]">{pinnedMessage.message}</p>
                  }
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#64748B] font-semibold text-xs leading-4">{pinnedMessage.time}</p>
                {
                  pinnedMessage.unseen
                    ? <p className="flex justify-end bg-[#FF754C] w-5 h-5 text-[0.8rem] text-[#FFFFFF] pl-2 pr-[6px] py-[1px] ml-6 rounded-full">{pinnedMessage.unseen}</p>
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
