import React from 'react';
import PersonInformation from './PersonInformation';
import PersonLinks from './PersonLinks';
import PersonAttachment from './PersonAttachment';

export default function PersonDetails() {
  return (
    <div className="mr-6 h-[100vh] bg-slate-50 pt-2">
      <PersonInformation />
      <PersonAttachment />
      <PersonLinks />
    </div>
  );
}
