import React, { useState } from 'react';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import { arrowRightIcon, searchIcon } from '../../../Assets/SVGcomponents';
import { Attachments } from '../../../data';

export default function PersonAttachment() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-2 mb-1 mx-2">
        <p className="font-medium text-sm leading-5 text-slate-900">Attachments</p>
        <div className="flex flex-row items-center">
          <SVGIcon Icon={searchIcon} />
          <SVGIcon onClick={() => setCollapse(!collapse)} className={collapse ? 'rotate-90' : ''} Icon={arrowRightIcon} />
        </div>
      </div>
      <div className={`mx - 5 ${collapse ? 'h-[10rem] overflow-y-auto' : ''}`}>
        {
          collapse && Attachments.map((attachment) => (
            <div key={attachment.id} className="flex flex-row justify-between border-b border-slate-200 py-1">
              <div className="flex flex-row items-center gap-x-2">
                <div>
                  <SVGIcon Icon={attachment.fileIcon} />
                </div>
                <div>
                  <p className="font-medium text-sm leading-4 text-[#0F172A]">{attachment.fileName}</p>
                  <p className="font-medium text-[11px] leading-4">{attachment.time}</p>
                </div>
              </div>
              <div>
                <SVGIcon Icon={attachment.downloadIcon} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
