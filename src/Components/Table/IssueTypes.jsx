import React, { useState } from 'react';
import { flashIconOne, flashIconTwo } from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function IssueTypes() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-row justify-center items-start relative">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => setModalOpen(!modalOpen)} className="w-6 h-6 rounded-md bg-[#E5493A] flex flex-row justify-center items-center">
        <SVGIcon Icon={flashIconTwo} />
      </div>
      {
        modalOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[11.063em] h-auto left-1/3 top-8 bg-white rounded-md">
            <div className="bg-slate-50 px-3 py-2">
              <p className="text-[0.688rem] text-slate-500 font-medium">Issue type to search or add...</p>
            </div>
            <p className="text-[0.688rem] text-slate-500 font-medium py-2 pl-3">Select Issue types</p>
            <div className="pl-3">
              <div className="flex flex-row items-center gap-x-3">
                <div className="w-6 h-6 bg-slate-200 rounded-[0.188rem]">
                  { }
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">None</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-primary flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconOne} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">Epic</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-[#E5493A] flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconTwo} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">Bug</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-[#68B447] flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconOne} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">New Feature</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-[#E5493A] flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconOne} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">Improvement</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-[#4BADE8] flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconOne} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">Task</p>
              </div>
              <div className="flex flex-row items-center gap-x-3 pt-2">
                <div className="w-6 h-6 bg-[#FFA2C0] flex flex-row justify-center items-center rounded-[0.188rem]">
                  <SVGIcon Icon={flashIconOne} />
                </div>
                <p className="text-slate-900 font-medium text-[0.688rem]">Sub Task</p>
              </div>
            </div>

            <button className="pl-3 py-2 text-slate-500 font-medium text-[0.688rem] underline">Add/edit options</button>

          </div>
        )
      }
    </div>
  );
}
