import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { arrowRightIcon, searchIcon } from '../../../Assets/SVGcomponents';
import { Links } from '../../../data';
// import CallingModal from './CallingModal';

export default function PersonLinks() {
  const [collapse1, setCollapse1] = useState(true);
  return (
    <div className={collapse1 ? 'h-[20%]' : 'h-[0%] py-4'}>
      <div className="flex flex-row justify-between items-center mb-2 mx-2">
        <p className="font-medium text-sm leading-5 text-slate-900 pt-[30px]">Links</p>
        <div className="flex flex-row items-center cursor-pointer">
          <SVGIcon className="w-[15px] h-[15px]" Icon={searchIcon} />
          <SVGIcon onClick={() => setCollapse1(!collapse1)} className={collapse1 ? '' : 'rotate-90'} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className={collapse1 ? 'w-full h-full overflow-y-auto scroll-smooth mt-4' : ''}>
        {
          collapse1 && Links.map((link) => (
            <div key={link.id}>
              <div className="flex flex-row items-center mx-5 gap-x-2 border-b border-slate-200 py-1">
                <div>
                  <SVGIcon Icon={link.linkIcon} />
                </div>
                <div className="cursor-pointer">
                  <a href={link.linkAddress} className="font-medium text-sm leading-4 text-[#6239ED] underline">{link.linkAddress}</a>
                </div>
              </div>
            </div>
          ))
        }
        {/* <CallingModal /> */}
      </div>
    </div>
  );
}
