import React, { useRef, useState } from 'react';
import {
  arrowDownIcon,
} from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';
import { Status } from '../../data';

export default function DropDown() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const handleStates = (selectedStatus) => {
    setStatus(selectedStatus);
    setModalOpen(!modalOpen);
  };
  return (
    <div className="flex flex-row justify-center items-start relative cursor pointer">
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
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 h-auto right-1/3 top-7 bg-white shadow-2xl rounded-md cursor-pointer">

            <div className="px-[12px] py-[8px]">
              <p className="text-[0.688rem] text-slate-500 font-medium">Select Status</p>
              {
                Status.map((s) => (
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
