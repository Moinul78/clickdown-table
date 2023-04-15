import React from 'react';
import ChatBoxInput from './ChatBoxInput';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';

export default function ChatBox() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <ChatBoxHeader />
        <ChatBoxBody />
      </div>
      <ChatBoxInput />
    </div>
  );
}
