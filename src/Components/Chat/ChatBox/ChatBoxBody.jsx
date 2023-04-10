import React, { useEffect, useRef } from 'react';
import { ChattingData } from '../../../data';
import SVGIcon from '../../../SVGIcon/SVGIcon';

export default function ChatBoxBody() {
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className="px-5 w-full h-[60vh] overflow-y-scroll no-scrollbar">
      {
        ChattingData?.map((msg) => (
          <div key={msg.id} className="bg-[#F8FAFC]">
            <div className={`flex items-start p-[8px] ${msg.author ? 'flex-row-reverse justify-start' : 'flex-row justify-start'}`}>
              <SVGIcon className="w-[2rem] h-[2rem]" Icon={msg.avatar} />
              <div className={`w-[20rem] border rounded ${msg.author ? 'bg-[#6239ED] mr-[0.5rem] p-[0.5rem]' : 'bg-[#F8FAFC] ml-[0.5rem] p-1'}`}>
                <div className="flex flex-row justify-between">
                  <p className={`font-medium text-sm leading-3 ${msg.author ? 'text-white cursor-pointer' : 'text-[#0F172A] cursor-pointer'}`}>{msg.username}</p>
                  <p className={`font-semibold text-xs ${msg.author ? 'text-slate-300 cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.time}</p>
                </div>
                <div className="">
                  <p className={`text-xs font-normal ${msg.author ? 'text-white cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.message}</p>
                </div>
              </div>
            </div>
            <div ref={messageEndRef}>{ }</div>
          </div>
        ))
      }
    </div>
    // <div className="border-t-[1px] border-slate-100">
    //   <div className="flex justify-between w-[20.813rem] mt-[1rem]">
    //     <div className="flex flex-row">
    //       <div>
    //         <SVGIcon className="w-[2rem] h-[2rem] mr-[0.75rem]" Icon={avatar2} />
    //       </div>
    //       <div className="bg-[#F8FAFC] border rounded p-[0.5rem]">
    //         <div className="flex flex-row justify-between">
    //           <p className="text-[#0F172A] text-sm font-medium leading-4">Moinul Islam</p>
    //           <p className="text-[#64748B] font-semibold text-sm leading-4">4.55PM</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-row justify-end mt-[0.5rem]">
    //     <div className="flex flex-row ">
    //       <div className="bg-[#6239ED] border rounded p-[0.5rem]">
    //         <div className="flex flex-row justify-between">
    //           <p className="text-[#FFFFFF] text-sm font-medium leading-4">Moinul Islam</p>
    //           <p className="text-[#CBD5E1] font-semibold text-sm leading-4">4.55PM</p>
    //         </div>
    //         <div className="flex justify-center items-center mt-[0.5rem]">
    //           <SVGIcon className="" Icon={PlayCircleIcon} />
    //           <SVGIcon className="" Icon={VoiceMessage} />
    //         </div>
    //       </div>
    //       <div>
    //         <SVGIcon className="w-[2rem] h-[2rem] ml-[0.75rem]" Icon={avatar2} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
