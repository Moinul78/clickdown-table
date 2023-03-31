import React, { useRef, useState } from 'react';
import { starCircleIcon } from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function SprintPoint() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));
  const getPoints = () => {
    const point = document.getElementById('points').value;
    if (point >= 0) {
      setSelected(point);
      setModalOpen(!modalOpen);
    }
  };
  return (
    <div className="flex flex-row justify-center items-start relative hover:cursor-pointer">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => { }} className="w-6 h-6">
        {
          selected
            ? (
              <div className="flex flex-row justify-center items-center">
                <SVGIcon Icon={starCircleIcon} />
                <p className="text-slate-500 font-medium text-[0.688rem]">{selected}</p>
              </div>
            )
            : (<SVGIcon Icon={starCircleIcon} />)
        }
      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[10rem] h-auto right-1/3 p-2 top-6 bg-white shadow-2xl rounded-md">
            <input autoFocus="on" id="points" autoComplete="off" onInput={getPoints} className="w-full p-2 outline-none bg-[#F8FAFC] text-[0.688rem] ]" name="search" placeholder="Give Point" />
          </div>
        )
      }
    </div>
  );
}
