import React, { useEffect, useRef, useState } from 'react';
import { emojiThreeDot } from '../../../Assets/SVGcomponents';
import { ChattingData, Emoji } from '../../../data';
import SVGIcon from '../../../SVGIcon/SVGIcon';

export default function ChatBoxBody() {
  const [data, setData] = useState(ChattingData);
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const handleEmoji = (event, msg) => {
    setData(([...prev]) => {
      const isExist = prev[msg.id]?.emoji?.find((e) => e.id === event.id);
      if (isExist) {
        prev[msg.id]?.emoji?.splice(prev[msg.id]?.emoji?.indexOf(isExist), 1);
        return prev;
      }
      prev[msg.id]?.emoji?.push(event);
      return prev;
    });
  };

  return (
    <div className="w-full">
      {
        data?.map((msg) => (
          <div key={msg.id} className="group">
            <div className={`flex items-start p-[8px] ${msg.author ? 'flex-row-reverse flex-grow justify-start' : 'flex-row justify-start'}`}>
              <img className="w-[2rem] h-[2rem]" src={msg.avatar} alt="" />
              <div className={`w-[35rem] rounded ${msg.author ? 'bg-[#6239ED] mr-[0.5rem] p-[0.5rem]' : 'bg-[#F8FAFC] ml-[0.5rem] p-1'}`}>
                <div className="flex flex-row justify-between">
                  <p className={`font-medium text-[16px] leading-3 ${msg.author ? 'text-white cursor-pointer' : 'text-[#0F172A] cursor-pointer'}`}>{msg.username}</p>
                  <p className={`font-semibold text-[16px] ${msg.author ? 'text-slate-300 cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.time}</p>
                </div>
                <div className="">
                  <p className={`text-[14px] font-normal ${msg.author ? 'text-white cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.message}</p>
                </div>
              </div>
            </div>
            <div className={`flex ${msg.author ? 'justify-between ml-[31rem] w-[35rem] items-start flex-row' : 'w-[35rem] items-start flex-row justify-between ml-[60px]'}`}>
              <div style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)' }} className="flex flex-row">
                {
                  msg.emoji.map((e) => (
                    <img key={e.id} src={e.emoji} alt="" />
                  ))
                }
              </div>
              <div className="hidden group-hover:block">
                <div style={{ boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)' }} className="w-[125px] h-[24px] flex gap-x-2 mr-[60px] shadow-2xl rounded-md cursor-pointer">
                  {
                    Emoji.map((e) => (
                      <div onClick={() => handleEmoji(e, msg)} role="contentinfo" onKeyDown={() => { }} key={e.id}>
                        <img src={e.emoji} alt="" />
                      </div>
                    ))
                  }
                  <SVGIcon Icon={emojiThreeDot} />
                </div>
              </div>
            </div>
            <div ref={messageEndRef}>{ }</div>
          </div>
        ))
      }
    </div>
  );
}
