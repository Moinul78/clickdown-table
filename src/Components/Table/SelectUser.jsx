import React, { useState } from 'react';
import { addUserIcon, avatar1, avatar2, avatar3 } from '../Assets/SVGcomponents';
import SVGIcon from '../SVGIcon/SVGIcon';

const SelectUser = () => {
  const [addUser, setAddUser] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const addedUser = [];
  addedUser.push(addUser);
  const users = [
    {
      id: 1,
      name: "Moinul Islam",
      icon: avatar1,
      isAdded: false,
    },
    {
      id: 2,
      name: "Ramjan Ali Anik",
      icon: avatar3,
      isAdded: false,
    },
    {
      id: 3,
      name: "Rasel Miah",
      icon: avatar3,
      isAdded: false,
    }
  ]
  const handleAddedUser = (user) => {
    console.log(user)
    let ele = document.getElementById("container");
    ele.innerHTML += `
    <SVGIcon Icon={addUserIcon} />
    <p className='text-slate-900 font-medium text-[0.688rem]'>${user.name}</p>
    </div>
    `
    setAddUser(user);
  }
  return (
    <td >
      <div onClick={() => setModalOpen(!modalOpen)} className='flex flex-row justify-center items-center py-2'>
        <SVGIcon Icon={addUserIcon} />
        {/* {
          addUser ? <>
            <img src={addUser.icon} alt="" />
          </> : <img src={addUserIcon} alt="" />
        } */}
      </div>
      {
        modalOpen && (
          <div className='absolute w-[11.063em] h-auto  bg-white rounded-md'>
            <div className='bg-slate-50 px-3'>
              <input placeholder="Search..." className='text-[0.688rem] text-slate-500 font-medium border-0' type="text" />
              {
                <div id="container" className='text-slate-900 font-medium text-[0.688rem]'>

                </div>
              }
            </div>
            {
              users.map((user) => (
                <div key={user.id} className='pl-3'>
                  <div className='flex flex-row items-center gap-x-3'>
                    <div className='w-6 h-6 bg-primary flex flex-row justify-center items-center rounded-[0.188rem]'>
                      <SVGIcon Icon={user.icon} />
                    </div>
                    <p onClick={() => handleAddedUser(user)} className='text-slate-900 font-medium text-[0.688rem]'>{user.name}</p>
                  </div>
                </div>
              ))
            }

          </div>
        )
      }
    </td>
  );
};

export default SelectUser;