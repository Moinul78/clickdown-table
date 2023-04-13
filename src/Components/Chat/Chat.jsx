import React from 'react';
import ChatBox from './ChatBox/ChatBox';
import MessageList from './MessageList/MessageList';
import UserDetails from './PersonDetails/PersonDetails';

export default function Chat() {
  return (
    <div className="grid grid-cols-4 max-h-screen overflow-y-auto">
      <div className="col-span-1 w-full max-h-screen overflow-y-auto">
        <MessageList />
      </div>
      <div className="col-span-2 w-full max-h-screen overflow-y-auto">
        <ChatBox />
      </div>
      <div className="col-span-1 w-full max-h-screen overflow-y-auto">
        <UserDetails />
      </div>
    </div>
  );
}
