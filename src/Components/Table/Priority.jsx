import React, { useState } from 'react';
import {
  flagIcon,
  HighPriority,
  LowPriority,
  MediumPriority,
  PriorityFlag,
} from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function DropDown() {
  const priority = [
    {
      id: 1,
      status: 'Low',
      flag: LowPriority,
      className: 'bg-[#22C55E] flex justify-center items-center text-white text-bold mb-1',
    },
    {
      id: 2,
      status: 'Medium',
      flag: MediumPriority,
      className: 'bg-[#FE7317] flex justify-center items-center text-white text-bold mb-1',
    },
    {
      id: 3,
      status: 'High',
      flag: HighPriority,
      className: 'bg-[#DC2626] flex justify-center items-center text-white text-bold mb-1',
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const handleStates = (selectedStatus) => {
    setStatus(selectedStatus);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="w-6 h-6">
        {
          status
            ? (
              <div className="flex flex-row justify-center items-center w-6 h-6">
                <SVGIcon Icon={status.flag} />
              </div>
            )
            : (<SVGIcon Icon={flagIcon} />)
        }
      </div>
      {
        modalOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[5rem] h-auto right-1/3 top-6 bg-white shadow-xl rounded-md">
            <div className="bg-slate-50 w-full">
              {
                priority.map((s) => (
                  <div key={s.id}>
                    <div className={s.className}>
                      <SVGIcon Icon={PriorityFlag} />
                      <p onClick={() => handleStates(s)} role="contentinfo" onKeyDown={() => { }}>{s.status}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
}
