import React from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { PinnedMessageIcon, arrowRightIcon } from '../../../Assets/SVGcomponents';
import { pinnedMessages } from '../../../data';

export default function PinnedMessage() {
  return (
    <div className="mt-[2.063rem]">
      <div className="flex justify-between items-centerem">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <SVGIcon className="" Icon={PinnedMessageIcon} />
          <p className="text-[#94A3B8] font-medium text-sm leading-5">Pinned Message</p>
        </div>
        <div>
          <SVGIcon className="" Icon={arrowRightIcon} />
        </div>
      </div>
      <div className="mt-2">
        {
          pinnedMessages.slice(0, 3).map((pinnedMessage) => (
            <div key={pinnedMessage.id} className="flex justify-between my-2">
              <div className="flex flex-row">
                <SVGIcon className="w-[3rem] h-[3rem] mr-[0.75rem]" Icon={pinnedMessage.avatar} />
                <div>
                  <p className="font-semibold text-sm leading-4 text-[#0F172A] pb-2">{pinnedMessage.username}</p>
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
                    ? <p className="flex justify-end bg-[#FF754C] px-2 py-[1px] ml-5 rounded-full">{pinnedMessage.unseen}</p>
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
