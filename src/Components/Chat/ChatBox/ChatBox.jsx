import React from 'react';
import ChatBoxInput from './ChatBoxInput';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';

export default function ChatBox() {
  return (
    <div className="px-5 mt-1 flex-grow h-screen">
      <div className="w-full h-[4rem]"><ChatBoxHeader /></div>
      <div className="h-3/5 flex-grow overflow-y-auto"><ChatBoxBody /></div>
      <div className="h-[10rem]">
        <ChatBoxInput />
      </div>
    </div>
  );
}
