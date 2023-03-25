import React, { useRef, useState } from 'react';
import { starCircleIcon } from '../../Assets/SVGcomponents';
import { Options } from '../../data';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function SprintPoint() {
  const [modalOpen, setModalOpen] = useState(false);
  const [allData, setAllData] = useState(Options);
  const [selected, setSelected] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));

  const handleStates = (data) => {
    setSelected(data.value);
    setModalOpen(!modalOpen);
    setAllData(Options);
  };
  const handleSearchData = (searchName) => {
    const searchString = searchName.trim();
    if (searchString === '') {
      const remainingData = Options.filter((data) => !selected.some(
        (selectedData) => selectedData.id === data.id,
      ));
      setAllData(remainingData);
    } else {
      const remainingData = allData.filter(
        (data) => data.value.toLowerCase().includes(searchString.toLowerCase()),
      );
      setAllData(remainingData);
    }
  };

  return (
    <div className="flex flex-row justify-center items-start relative">
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
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 w-[3rem] h-auto left-1/3 top-6 bg-white shadow-xl rounded-md">
            <input onChange={(e) => handleSearchData(e.target.value)} className="w-full border border-slate-300 outline-none bg-slate-50 text-[0.688rem] ]" type="text" name="search" placeholder="Search.." />
            <div className="bg-slate-50 w-full">
              {
                allData && allData.map((data) => (
                  <div key={data.id}>
                    <div className="">
                      <p onClick={() => handleStates(data)} role="contentinfo" onKeyDown={() => { }} className="text-slate-900 font-medium text-[0.688rem] border-b-2">{data.value}</p>
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
