import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  RecentMessages,
} from '../../../data';
import { ChatActive, arrowRightIcon } from '../../../Assets/SVGcomponents';

export default function RecentMessage() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="mt-[1.5rem]">
      <div className="flex justify-between items-centerem">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <SVGIcon className="" Icon={ChatActive} />
          <p className="text-[#94A3B8] font-medium text-sm leading-5">Recent Message</p>
        </div>
        <div className="cursor-pointer">
          <SVGIcon onClick={() => setCollapse(!collapse)} className={collapse ? 'rotate-90' : ''} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className="mt-1">
        {
          collapse && RecentMessages.map((recentMessage) => (
            <div key={recentMessage.id} className="flex justify-between my-2 h-[2rem] ">
              <div className="flex flex-row">
                <SVGIcon className="w-[2rem] h-[2rem] mr-[0.75rem]" Icon={recentMessage.avatar} />
                <div>
                  <p className="font-semibold text-sm leading-4 text-[#0F172A] cursor-pointer">{recentMessage.username}</p>
                  <div>
                    {
                      recentMessage.isWriting ? <p className="text-[#22C55E] font-medium text-[12px]">Typing...</p>
                        : <p className="text-[#475569] font-medium text-[12px]">{recentMessage.message}</p>
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#64748B] font-semibold text-xs leading-4 cursor-pointer">{recentMessage.time}</p>
                {
                  recentMessage.unseen
                    ? <p className="flex justify-end bg-[#FF754C] w-5 h-5 text-[0.8rem] text-[#FFFFFF] cursor-pointer pl-2 pr-[6px] py-[1px] ml-6 rounded-full">{recentMessage.unseen}</p>
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
