import React, { useRef, useState } from 'react';
import {
  addUserIcon,
  avatar1,
  avatar2,
  cancel,
} from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function SelectUser() {
  const users = [
    {
      id: 1,
      name: 'Moinul Islam',
      icon: avatar1,
      isAdded: false,
    },
    {
      id: 2,
      name: 'Ramjan Ali Anik',
      icon: avatar2,
      isAdded: false,
    },
    {
      id: 3,
      name: 'Rakibul Yeasin',
      icon: avatar1,
      isAdded: false,
    },
    {
      id: 4,
      name: 'Mizanur Rahman Hasan',
      icon: avatar2,
      isAdded: false,
    },
    {
      id: 5,
      name: 'Jayeen Bin Alam',
      icon: avatar1,
      isAdded: false,
    },
    {
      id: 6,
      name: 'Rasel Miah',
      icon: avatar2,
      isAdded: false,
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [allmembers, setAllMembers] = useState(users);
  const [selected, setSelected] = useState([]);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const handleAddedUser = (selectedMember) => {
    const remainingMembers = allmembers.filter((member) => member.id !== selectedMember.id);
    const newSelectedMembers = [...selected, selectedMember];
    setSelected(newSelectedMembers);
    setAllMembers(remainingMembers);

    //   let ele = document.getElementById('container');
    //   ele.innerHTML += `
    // <div class='flex justify-center items-center gap-x'>
    // <p class='text-slate-900 font-medium text-[0.688rem]'>${user.name}</p>
    // <p>x</p></div>

    //   `
  };
  const handleSearchMembers = (searchName) => {
    const searchString = searchName.trim();
    // console.log(searchString);
    if (searchString === '') {
      const remainingMembers = users.filter((member) => !selected.some(
        (selectedMember) => selectedMember.id === member.id,
      ));
      setAllMembers(remainingMembers);
    } else {
      const remainingMembers = allmembers.filter(
        (member) => member.name.toLowerCase().includes(searchString.toLowerCase()),
      );
      setAllMembers(remainingMembers);
    }
  };
  const handleRemoveUser = (removedMember) => {
    const newSelectedMembers = selected.filter((member) => member.id !== removedMember.id);
    const remainingMembers = [...allmembers, removedMember];
    setSelected(newSelectedMembers);
    setAllMembers(remainingMembers);
  };
  return (
    <div>
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => setModalOpen(!modalOpen)} className="flex flex-row justify-center items-start relative">
        {
          selected.length < 1 && (<SVGIcon className="w-6 h-6 rounded-full" onClick={() => setModalOpen(true)} Icon={addUserIcon} />)
        }
        {
          selected.length === 1 && (<SVGIcon className="w-6 h-6 rounded-full" onClick={() => setModalOpen(true)} Icon={selected[0].icon} />)
        }
        {
          selected.length > 1 && (
            <div className="flex flex-row items-centers">
              <SVGIcon className="w-6 h-6 rounded-full" onClick={() => setModalOpen(true)} Icon={selected[0].icon} />
              <div onClick={() => setModalOpen(true)} onKeyDown={() => setModalOpen(true)} role="contentinfo" className="w-6 h-6 rounded-full bg-[#E3DBFC] flex flex-row justify-center items-center">
                <p className="text-primary font-medium text-[0.813rem]">
                  {
                    selected.length - 1
                  }
                  +
                </p>
              </div>
            </div>
          )
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[11.063em] h-auto bg-white rounded-md">
            <div className="bg-slate-50 px-3">
              {
                selected.map((member) => (
                  <div key={member.id} className="flex flex-row items-center justify-left gap-x-[0.438rem]">
                    <SVGIcon className="w-6 h-6 rounded-full" Icon={member.icon} />
                    <p className="text-[0.688rem] text-slate-900 font-medium">{member.name}</p>
                    <div onClick={() => handleRemoveUser(member)} role="contentinfo" onKeyDown={() => { }}>
                      <SVGIcon Icon={cancel} />
                    </div>
                  </div>
                ))
              }
              <input onChange={(e) => handleSearchMembers(e.target.value)} className="w-full outline-none bg-slate-50 focus:[ text-primary font-medium text-[0.688rem] ]" type="text" name="search" placeholder={`${selected.length > 0 ? '' : 'Search People'}`} />
            </div>
            {
              allmembers.length > 0 ? (<p className="text-slate-500 font-medium text-[0.688rem] pl-3 py-2">Select People..</p>) : (<p className="text-slate-500 font-medium text-[0.688rem] pl-3 py-2">No People Found!!</p>)
            }
            {
              allmembers && allmembers.map((user) => (
                <div key={user.id} onClick={() => handleAddedUser(user)} role="contentinfo" onKeyDown={() => { }} className="pl-6">
                  <div className="flex flex-row items-center justify-left gap-x-2">
                    <SVGIcon className="w-6 h-6 flex flex-row rounded-[0.188rem]" Icon={user.icon} />
                    <p onClick={() => handleAddedUser(user)} role="contentinfo" onKeyDown={() => { }} className="text-slate-900 font-medium text-[0.688rem]">{user.name}</p>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}
