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
      className: 'bg-[#E2E8F0] text-[#475569] flex justify-left items-center  text-bold my-2 px-[8px] w-[90px] h-[24px]  rounded-[4px]',
    },
    {
      id: 2,
      status: 'IN PROGRESS',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#6239ED] mr-[4px]',
      className: 'bg-[#6239ed1a] text-[#475569] flex justify-left items-center  text-bold my-2 px-[4px] w-[115px] h-[24px]  rounded-[4px]',
    },
    {
      id: 3,
      status: 'IN REVIEW',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#FE7317] mr-[4px]',
      className: 'bg-[#FFF1E8] text-[#475569] flex justify-left items-center  text-bold my-2 px-[8px] w-[105px] h-[24px] rounded-[4px]',
    },
    {
      id: 4,
      status: 'DONE',
      ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#22C55E] mr-[4px]',
      className: 'bg-[#DCFCE7] text-[#475569] flex flex-row justify-left items-center  text-bold my-2 px-[8px] w-[80px] h-[24px] rounded-[4px]',
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
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="h-[56px] grid justify-center items-center">
        {
          status
            ? (
              <div className={status.className}>
                <p className={status.ellipsis}>{ }</p>
                <p className="text-[10px] text-[#475569] text-center font-medium mr-[6.5px] w-auto">{status.status}</p>
                <SVGIcon className="w-5 h-5" Icon={arrowDownIcon} />
              </div>
            )
            : (
              <div className="bg-[#E2E8F0] text-[#475569] flex justify-left items-center my-2 px-[8px] w-[80px] h-[24px] rounded-[4px]">
                <p className="w-[6px] h-[6px] rounded-full bg-[#475569] mr-[4px]">{ }</p>
                <p className="text-[10px] text-[#475569] text-center font-medium w-auto">TO DO</p>
                <SVGIcon className="w-5 h-5" Icon={arrowDownIcon} />
              </div>
            )
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 h-auto right-1/3 top-7 py-[6px] px-[4px] bg-white shadow-2xl rounded-md">
            <div>
              {
                priority.map((s) => (
                  <div key={s.id}>
                    <div onClick={() => handleStates(s)} role="contentinfo" onKeyDown={() => { }} className={s.className}>
                      <p className={s.ellipsis}>{ }</p>
                      <p className="text-[10px] text-[#475569] text-center font-medium w-auto">{s.status}</p>
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
