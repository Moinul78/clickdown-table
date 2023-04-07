import React from 'react';
import ChatBoxInput from './ChatBoxInput';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';

export default function ChatBox() {
  return (
    <div className="px-5 py-2 h-screen flex flex-col justify-between bg-[#F5F5F5]">
      <div>
        <div><ChatBoxHeader /></div>
        <div><ChatBoxBody /></div>
      </div>
      <div>
        <ChatBoxInput />
      </div>
    </div>
  );
}