import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  RecentMessages,
} from '../../../data';
import { ChatActive, arrowRightIcon } from '../../../Assets/SVGcomponents';

export default function RecentMessage() {
  const [collapse1, setCollapse1] = useState(true);
  return (
    <div className={collapse1 ? 'h-[60%]' : 'h-[0%]'}>
      <div className="mt-[1.5rem] h-full ">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-x-2 justify-center items-center">
            <SVGIcon className="" Icon={ChatActive} />
            <p className="text-[#94A3B8] font-medium text-sm leading-5">Recent Message</p>
          </div>
          <div className="cursor-pointer">
            <SVGIcon onClick={() => setCollapse1(!collapse1)} className={collapse1 ? '' : 'rotate-90'} Icon={arrowRightIcon} />
          </div>
        </div>
        <div className="mt-4 h-full overflow-y-auto scroll-smooth">
          {
            collapse1 && RecentMessages.map((recentMessage) => (
              <div key={recentMessage.id} className="flex justify-between mb-[8px]">
                <div className="flex flex-row">
                  <img className="w-[3rem] h-[3rem] mr-[0.75rem]" src={recentMessage.avatar} alt="" />
                  <div>
                    <p className="font-semibold text-sm leading-4 text-[#0F172A] cursor-pointer mb-[2px]">{recentMessage.username}</p>
                    <div>
                      {
                        recentMessage.isWriting ? <p className="text-[#22C55E] font-medium text-xs mt-[6px]">Typing...</p>
                          : <p className="text-[#475569] font-medium text-xs mt-[6px]">{recentMessage.message}</p>
                      }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#475569] font-semibold text-xs leading-4 cursor-pointer">{recentMessage.time}</p>
                  {
                    recentMessage.unseen
                      ? <p className="flex justify-end bg-[#FF754C] w-5 h-5 text-[10px] text-semibold text-[#FFFFFF] pr-[7px] py-[3px] ml-7 rounded-full cursor-pointer my-1.5">{recentMessage.unseen}</p>
                      : ''
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
