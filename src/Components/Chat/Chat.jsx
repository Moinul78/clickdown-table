import React from 'react';
import ChatBox from './ChatBox/ChatBox';
import MessageList from './MessageList/MessageList';
import UserDetails from './PersonDetails/PersonDetails';

export default function Chat() {
  return (
    <div>
      <div className="grid grid-cols-4 h-screen w-full">
        <div className="col-span-1">
          <MessageList />
        </div>
        <div className="col-span-2">
          <ChatBox />
        </div>
        <div className="col-span-1">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
