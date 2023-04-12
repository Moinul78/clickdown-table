import React from 'react';
import ChatBoxInput from './ChatBoxInput';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';

export default function ChatBox() {
  return (
    <div className="px-5 py-2 h-screen grid grid-rows-12">
      <div>
        <div className="row-span-1"><ChatBoxHeader /></div>
        <div className="row-span-9"><ChatBoxBody /></div>
      </div>
      <div className="row-span-2">
        <ChatBoxInput />
      </div>
    </div>
  );
}
