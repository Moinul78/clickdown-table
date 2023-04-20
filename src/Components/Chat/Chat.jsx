import React from 'react';
import ChatBox from './ChatBox/ChatBox';
import MessageList from './MessageList/MessageList';
import UserDetails from './PersonDetails/PersonDetails';
import './Chat.css';

export default function Chat() {
  return (
    <div className="grid grid-cols-5 w-full">
      <div className="col-span-1 w-full h-[100vh] no-scrollbar">
        <MessageList />
      </div>
      <div className="col-span-3 w-full h-[100vh]">
        <ChatBox />
      </div>
      <div className="col-span-1 w-full h-[100vh] no-scrollbar">
        <UserDetails />
      </div>
    </div>
  );
}
