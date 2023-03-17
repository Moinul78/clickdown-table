import React, { useState } from 'react';

const DropDown = () => {
  const [option, setOption] = useState("to-do");
  return (
    <div className='flex flex-row justify-center items-center'>
      <div className={`w-[0.375rem] h-[0.375rem] rounded-full relative left-3 ${option === 'to-do' && 'bg-slate-500'} ${option === 'in-progress' && 'bg-green-500'} ${option === 'in-review' && 'bg-[#FE7317]'} `}></div>
      <select className={`outline-none text-slate-600 font-medium text-[0.688rem] pl-3 pr-1 py-[0.375rem] rounded ${option === 'to-do' && 'bg-slate-200'} ${option === 'in-progress' && 'bg-green-500 bg-opacity-10'} ${option === 'in-review' && 'bg-[#FFF1E8]'}`} onChange={(e) => setOption(e.target.value)} name="status">
        <option value="to-do">
          TO DO
        </option>
        <option value="in-review" >
          IN REVIEW
        </option>
        <option value="in-progress">
          IN PROGRESS
        </option>
      </select>
    </div>
  );
};

export default DropDown;