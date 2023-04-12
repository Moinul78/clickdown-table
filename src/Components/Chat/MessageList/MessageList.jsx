import React from 'react';
import { searchIcon } from '../../../Assets/SVGcomponents';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import PinnedMessage from './PinnedMessage';
import RecentMessage from './RecentMessage';

export default function MessageList() {
  // const [person, setPerson] = useState(RecentMessages);
  // const handleSearchMembers = (searchName) => {
  //   const searchString = searchName.trim();
  //   if (searchString === '') {
  //     const remainingMembers = person.filter((member) => !selected.some(
  //       (selectedMember) => selectedMember.id === member.id,
  //     ));
  //     setPerson(remainingMembers);
  //   } else {
  //     const remainingMembers = person.filter(
  //       (member) => member.name.toLowerCase().includes(searchString.toLowerCase()),
  //     );
  //     setPerson(remainingMembers);
  //   }
  // };
  return (
    <div className="p-[1.25rem] w-[20.375rem] h-screen bg-[#F8FAFC] border-r-[1px] border-[#E2E8F0]">
      <p className="text-lg font-semibold leading-5 text-[#6239ED]">Message</p>
      <div className="w-[17.875rem] h-[2.625rem] flex flex-row items-center py-[0.688rem] px-[0.5rem] bg-[#FFFFFF] mt-[1rem]">
        <SVGIcon className="mr-[0.75rem] w-[1.25rem] h-[1rem]" Icon={searchIcon} />
        <input className="outline-none font-medium text-[#475569] text-sm leading-5 w-[10rem] h-[1.25]" type="text" placeholder="Search" />
        {/*  onChange={(e) => handleSearchMembers(e.target.value)} */}
      </div>
      <PinnedMessage />
      <RecentMessage />
    </div>
  );
}
