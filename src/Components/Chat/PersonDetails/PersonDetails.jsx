import React from 'react';
import PersonInformation from './PersonInformation';
import PersonAttachment from './PersonAttachment';
import PersonLinks from './PersonLinks';

export default function PersonDetails() {
  return (
    <div className="mr-6 bg-slate-50 h-screen ">
      <PersonInformation />
      <PersonAttachment />
      <PersonLinks />
    </div>
  );
}
