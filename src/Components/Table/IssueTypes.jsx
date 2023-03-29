import React, { useRef, useState } from 'react';
import { flashIconTwo } from '../../Assets/SVGcomponents';
import { issuetypes } from '../../data';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function IssueTypes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState(false);
  console.log(type);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const handleStates = (selectedType) => {
    console.log(selectedType);
    setType(selectedType);
    setModalOpen(!modalOpen);
  };
  return (
    <div className="relative cursor-pointer">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => setModalOpen(!modalOpen)} className="w-6 h-6 rounded-md bg-[#E5493A] flex flex-row justify-center items-center">
        {
          type ? <SVGIcon className={type.iconClass} Icon={type.icon} />
            : <SVGIcon Icon={flashIconTwo} />
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[11.063em] h-auto left-1/3 top-8 bg-white rounded-md">
            <div className="bg-slate-50 px-3 py-2 rounded-md">
              <p className="text-[0.688rem] text-slate-500 font-medium">Issue type to search or add...</p>
            </div>
            <p className="text-[0.688rem] text-slate-500 font-medium py-2 pl-3">Select Issue types</p>
            <div className="pl-3">
              {
                issuetypes.map((issue) => (
                  <div onClick={() => handleStates(issue)} role="contentinfo" onKeyDown={() => { }} key={issue.id} className="flex flex-row items-center gap-x-3 pt-2">
                    <div className={issue.iconClass}>
                      <SVGIcon Icon={issue.icon} />
                    </div>
                    <p className={issue.textClass}>
                      {issue.type}
                    </p>
                  </div>
                ))
              }
              <button className="pl-3 py-2 text-slate-500 font-medium text-[0.688rem] underline">Add/edit options</button>
            </div>
          </div>
        )
      }
    </div>
  );
}
