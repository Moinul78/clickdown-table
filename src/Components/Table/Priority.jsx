import React, { useRef, useState } from 'react';
import {
  flagIcon,
  PriorityFlag,
} from '../../Assets/SVGcomponents';
import { priority } from '../../data';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function Priority() {
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
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="w-6 h-6">
        {
          status
            ? (
              <div className="flex flex-row justify-center items-center">
                <SVGIcon className=" w-5 h-5" Icon={status.flag} />
              </div>
            )
            : (<SVGIcon Icon={flagIcon} />)
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[6rem] h-auto right-1/3 top-6 bg-white shadow-xl">
            <div>
              {
                priority.map((s) => (
                  <div key={s.id}>
                    <div className={s.className}>
                      <SVGIcon className="mx-[8px]" Icon={PriorityFlag} />
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
