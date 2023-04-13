import React, { useState } from 'react';
import { CallDeclineIcon, avatar2 } from '../../../Assets/SVGcomponents';
import SVGIcon from '../../../SVGIcon/SVGIcon';

export default function ContactingModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Contacting</button>
      {
        modalOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 h-auto right-1/2 top-[15rem] bg-[#FFFFFF] border border-[#FFFFFF] rounded-xl cursor-pointer">
            <div className="p-[20px] w-[16.625rem] h-[10.5rem]">
              <div className="flex flex-row items-center">
                <SVGIcon className="w-[3rem] h-[3rem] rounded-full" Icon={avatar2} />
                <div className="ml-[1.125rem]">
                  <p className="text-[#0F172A] font-semibold text-sm leading-4">Moinul Islam</p>
                  <p className="text-[#22C55E]">Contacting...</p>
                </div>
              </div>
              <div className="mt-[2.188rem] flex flex-row justify-center items-center">
                <div onClick={() => setModalOpen(false)} role="contentinfo" onKeyDown={() => { }} className="flex flex-row bg-[#DC2626] rounded w-[12.5rem] h-[3rem] p-[0.75rem] gap-[0.6rem] items-center justify-center">
                  <SVGIcon Icon={CallDeclineIcon} />
                  <p className="text-[#FFFFFF]">Cancel</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
