import React from 'react';
import Chat from '../../Components/Chat/Chat';
import SideBar from '../../Components/Chat/SideBar';

export default function Projects() {
  return (
    <div className="flex flex-row">
      <div><SideBar /></div>
      <div className="flex-grow"><Chat /></div>
    </div>
  );
}
