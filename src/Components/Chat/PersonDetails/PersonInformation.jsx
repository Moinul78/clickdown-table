import React from 'react';
import { PersonInformations } from '../../../data';
import SVGIcon from '../../../SVGIcon/SVGIcon';
import {
  PersonAudioCall,
  PersonVideoCall,
  PhoneCallIcon,
  locationIcon,
  mailIcon,
} from '../../../Assets/SVGcomponents';

export default function PersonInformation() {
  return (
    <div className="bg-[#6239ED] rounded-xl">
      <div className="py-[0.5rem] mx-5">
        {
          PersonInformations.map((personInfo) => (
            <div key={personInfo.id}>
              <div className="flex flex-row border-b-[1px] border-[#FFFFFF] border-opacity-20">
                <SVGIcon className="w-[2rem] h-[2rem] mr-[1rem]" Icon={personInfo.avatar} />
                <div>
                  <div className="flex">
                    <p className="font-semibold text-[16px] leading-4 text-[#FFFFFF]">
                      {personInfo.username}
                    </p>
                    {personInfo.isActive ? <p className="bg-[#22C55E] rounded-full p-1 w-2 h-2 ml-2 mt-[0.1rem]">{ }</p> : ''}
                  </div>
                  <p className="font-normal text-[12px] leading-4 text-[#CBD5E1] mb-2">{personInfo.designation}</p>
                </div>
              </div>
              <div className="flex gap-x-2 py-1">
                <SVGIcon Icon={PersonAudioCall} />
                <SVGIcon Icon={PersonVideoCall} />
              </div>
              <div className="text-[#E2E8F0] text-sm font-normal leading-3 mt-1">
                <p className="pb-1">Contact: </p>
                <div className="flex gap-x-2 items-center py-[0.1rem]">
                  <SVGIcon Icon={mailIcon} />
                  <p>{personInfo.email}</p>
                </div>
                <div className="flex gap-x-2 items-center pb-[0.1rem]">
                  <SVGIcon Icon={PhoneCallIcon} />
                  <p>{personInfo.phone}</p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <SVGIcon Icon={locationIcon} />
                  <p>{personInfo.location}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
