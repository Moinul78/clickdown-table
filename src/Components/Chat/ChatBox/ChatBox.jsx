import React from 'react';
import ChatBoxInput from './ChatBoxInput';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';

export default function ChatBox() {
  return (
    <div className="h-screen flex flex-col pt-2">
      <div className="h-[10%] px-4">
        <ChatBoxHeader />
      </div>
      <div className="flex-grow h-[65%] px-4 overflow-y-auto scroll-smooth">
        <ChatBoxBody />
      </div>
      <div className="h-[25%]">
        <ChatBoxInput />
      </div>
    </div>
  );
}
