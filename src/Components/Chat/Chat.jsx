import React from 'react';
import ChatBox from './ChatBox/ChatBox';
import MessageList from './MessageList/MessageList';
import UserDetails from './PersonDetails/PersonDetails';
import './Chat.css';

export default function Chat() {
  return (
    <div className="grid grid-cols-4 min-h-[100vh] w-full">
      <div className="col-span-1 w-full no-scrollbar">
        <MessageList />
      </div>
      <div className="col-span-2 w-full">
        <ChatBox />
      </div>
      <div className="col-span-1 w-full no-scrollbar">
        <UserDetails />
      </div>
    </div>
  );
}
