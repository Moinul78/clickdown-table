import React from 'react';
import PersonInformation from './PersonInformation';
import PersonAttachment from './PersonAttachment';
import PersonLinks from './PersonLinks';

export default function PersonDetails() {
  return (
    <div className="mr-6 mt-2 bg-slate-50">
      <div>
        <PersonInformation />
      </div>
      <div>
        <PersonAttachment />
      </div>
      <div>
        <PersonLinks />
      </div>
    </div>
  );
}
