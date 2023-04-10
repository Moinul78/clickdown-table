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
      <div className="mt-4">
        {
          collapse && RecentMessages.map((recentMessage) => (
            <div key={recentMessage.id} className="flex justify-between my-2">
              <div className="flex flex-row">
                <SVGIcon className="w-[2rem] h-[2rem] mr-[0.75rem]" Icon={recentMessage.avatar} />
                <div>
                  <p className="font-semibold text-sm leading-4 text-[#0F172A] cursor-pointer mb-[2px]">{recentMessage.username}</p>
                  <div>
                    {
                      recentMessage.isWriting ? <p className="text-[#22C55E] font-medium text-xs">Typing...</p>
                        : <p className="text-[#475569] font-medium text-xs">{recentMessage.message}</p>
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#475569] font-semibold text-xs leading-4 cursor-pointer">{recentMessage.time}</p>
                {
                  recentMessage.unseen
                    ? <p className="flex justify-end bg-[#FF754C] w-5 h-5 text-[10px] text-semibold text-[#FFFFFF] pr-[7px] py-[3px] ml-7 rounded-full cursor-pointer">{recentMessage.unseen}</p>
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
