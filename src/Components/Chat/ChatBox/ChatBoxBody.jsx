import React, { useEffect, useRef } from 'react';
import { emojiThreeDot } from '../../../Assets/SVGcomponents';
import { ChattingData, Emoji } from '../../../data';
import SVGIcon from '../../../SVGIcon/SVGIcon';

export default function ChatBoxBody() {
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const handleEmoji = (event, msg) => {
    ChattingData[msg.id].emoji.push(event);
  };
  return (
    <div className="w-full">
      {
        ChattingData?.map((msg) => (
          <div key={msg.id} className="group">
            <div className={`flex items-start p-[8px] ${msg.author ? 'flex-row-reverse flex-grow justify-start' : 'flex-row justify-start'}`}>
              <img className="w-[2rem] h-[2rem]" src={msg.avatar} alt="" />
              <div className={`w-[35rem] rounded ${msg.author ? 'bg-[#6239ED] mr-[0.5rem] p-[0.5rem]' : 'bg-[#F8FAFC] ml-[0.5rem] p-1'}`}>
                <div className="flex flex-row justify-between">
                  <p className={`font-medium text-[16px] leading-3 ${msg.author ? 'text-white cursor-pointer' : 'text-[#0F172A] cursor-pointer'}`}>{msg.username}</p>
                  <p className={`font-semibold text-[16px] ${msg.author ? 'text-slate-300 cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.time}</p>
                </div>
                {
                  console.log(msg)
                }
                <div className="">
                  <p className={`text-[14px] font-normal ${msg.author ? 'text-white cursor-pointer' : 'text-slate-500 cursor-pointer'}`}>{msg.message}</p>
                </div>
              </div>
            </div>
            <div className={`flex ${msg.author ? 'justify-end gap-x-[370px] ml-[60px]' : 'w-[35rem] items-start  flex-row justify-between ml-[60px]'}`}>
              <div className="">
                {
                  msg.emoji?.map((emo) => (
                    console.log(emo.emoji)
                    // <img src={emo.emoji} alt="" />
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
