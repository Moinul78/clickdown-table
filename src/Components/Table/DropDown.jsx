import React, { useRef, useState } from 'react';
import {
  arrowDownIcon,
} from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function DropDown() {
  const priority = [
    {
      id: 1,
      status: 'TO DO',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#475569] mr-[4px]',
      className: 'bg-[#E2E8F0] text-[#475569] flex justify-left items-center text-white text-bold my-2 px-[8px] rounded-[4px]',
    },
    {
      id: 2,
      status: 'IN PROGRESS',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#6239ED] mr-[4px]',
      className: 'bg-[#6239ed1a] text-[#475569] flex justify-left items-center text-white text-bold my-2 px-[4px] rounded-[4px]',
    },
    {
      id: 3,
      status: 'IN REVIEW',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#FE7317] mr-[4px]',
      className: 'bg-[#FFF1E8] text-[#475569] flex justify-left items-center text-white text-bold my-2 px-[8px] rounded-[4px]',
    },
    {
      id: 4,
      status: 'DONE',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#22C55E] mr-[4px]',
      className: 'bg-[#DCFCE7] text-[#475569] flex justify-left items-center text-white text-bold my-2 px-[8px] rounded-[4px]',
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const handleStates = (selectedStatus) => {
    setStatus(selectedStatus);
    setModalOpen(!modalOpen);
  };
  return (
    <div className="flex flex-row justify-center items-start relative w-[8rem]">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="h-[2rem]">
        {
          status
            ? (
              <div className={status.className}>
                <p className={status.ellipsis}>{ }</p>
                <p className="text-[11px] text-[#475569] text-center text-bold mr-[6.5px]">{status.status}</p>
                <SVGIcon className="w-5 h-5 " Icon={arrowDownIcon} />
              </div>
            )
            : (
              <div className="flex flex-row justify-center items-center">
                <p className="w-[6px] h-[6px] rounded-full bg-[#475569] mr-[4px]">{ }</p>
                <p className="text-[11px] text-[#475569] text-center text-bold mr-[6.5px]">TO DO</p>
                <SVGIcon className="w-5 h-5 " Icon={arrowDownIcon} />
              </div>
            )
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 h-auto right-1/3 top-7 w-[7rem] bg-white shadow-2xl rounded-md">
            <div className="bg-slate-50 w-full">
              {
                priority.map((s) => (
                  <div key={s.id}>
                    <div onClick={() => handleStates(s)} role="contentinfo" onKeyDown={() => { }} className={s.className}>
                      <p className={s.ellipsis}>{ }</p>
                      <p className="text-[11px] text-[#475569] text-center text-bold mr-[6.5px] w-auto">{s.status}</p>
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
