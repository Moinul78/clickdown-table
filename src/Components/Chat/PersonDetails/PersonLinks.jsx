import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { arrowRightIcon, searchIcon } from '../../../Assets/SVGcomponents';
import { Links } from '../../../data';

export default function PersonLinks() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-2 mb-2 mx-2">
        <p className="font-medium text-sm leading-5 text-slate-900">Links</p>
        <div className="flex flex-row items-center cursor-pointer">
          <SVGIcon Icon={searchIcon} />
          <SVGIcon onClick={() => setCollapse(!collapse)} className={collapse ? 'rotate-90' : ''} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className={`mx - 5 ${collapse ? 'h-[6rem] overflow-y-auto' : ''}`}>
        {
          collapse && Links.map((link) => (
            <div key={link.id}>
              <div className="flex flex-row items-center gap-x-2 border-b border-slate-200 py-1">
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
      </div>
    </div>
  );
}
