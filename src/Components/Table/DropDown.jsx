import React, { useState } from 'react';

const DropDown = () => {
  const [option, setOption] = useState("to-do");
  return (
    <div className='flex flex-row justify-center items-start'>
      <div className='flex flex-row justify-center items-center'>
        <div className={`w-[0.375rem] h-[0.375rem] rounded-full relative left-3 ${option === 'to-do' && 'bg-slate-600'} ${option === 'in-progress' && 'bg-primary'} ${option === 'in-review' && 'bg-[#FE7317]'} `}></div>
        <select className={`outline-none text-slate-600 font-medium text-[0.688rem] pl-3 pr-1 py-[0.375rem] rounded  ${option === 'in-progress' && 'bg-[#6239ED1A] bg-opacity-10'} ${option === 'in-review' && 'bg-[#FFF1E8]'}`} onChange={(e) => setOption(e.target.value)} name="status" id="">
          <option value="to-do" className='bg-slate-100'>
            TO DO
          </option>
          <option value="in-review" className='bg-[#FFF1E8] outline-none'>
            IN REVIEW
          </option>
          <option value="in-progress" className='bg-[#6239ED1A] bg-opacity-10'>
            IN PROGRESS
          </option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;