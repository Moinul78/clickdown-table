import React from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  RecentMessages,
} from '../../../data';
import { ChatActive, arrowRightIcon } from '../../../Assets/SVGcomponents';

export default function RecentMessage() {
  return (
    <div className="mt-[2.063rem]">
      <div className="flex justify-between items-centerem">
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <SVGIcon className="" Icon={ChatActive} />
          <p className="text-[#94A3B8] font-medium text-sm leading-5">Recent Message</p>
        </div>
        <div>
          <SVGIcon className="" Icon={arrowRightIcon} />
        </div>
      </div>
      <div className="mt-2">
        {
          RecentMessages.map((recentMessage) => (
            <div key={recentMessage.id} className="flex justify-between my-2">
              <div className="flex flex-row">
                <SVGIcon className="w-[3rem] h-[3rem] mr-[0.75rem]" Icon={recentMessage.avatar} />
                <div>
                  <p className="font-semibold text-sm leading-4 text-[#0F172A] pb-2">{recentMessage.username}</p>
                  <div>
                    {
                      recentMessage.isWriting ? <p className="text-[#22C55E] font-medium text-[12px]">Typing...</p>
                        : <p className="text-[#475569] font-medium text-[12px]">{recentMessage.message}</p>
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#64748B] font-semibold text-xs leading-4">{recentMessage.time}</p>
                {
                  recentMessage.unseen
                    ? <p className="flex justify-end bg-[#FF754C] px-2 py-[1px] ml-5 rounded-full">{recentMessage.unseen}</p>
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
