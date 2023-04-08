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
    <div>
      {
        PersonInformations.map((personDetails) => (
          <div key={personDetails.id} className="h-[17.875rem] bg-[#6239ED] rounded-xl px-5 py-[1.125rem]">
            <div className="flex flex-row items-center">
              <SVGIcon className="w-[2.625rem] h-[2.625rem] rounded-full border-2 bg-white p-[0.125rem]" Icon={personDetails?.avatar} />
              <div className="ml-[1.125rem]">
                <div className="flex flex-row items-center">
                  <p className="text-white font-semibold text-lg">{personDetails?.username}</p>
                  {
                    personDetails?.isActive && (
                      <div className="w-2 h-2 rounded-full bg-[#22C55E] ml-2">{ }</div>
                    )
                  }
                </div>
                <p className="text-slate-300 font-normal text-sm">{personDetails?.designation}</p>
              </div>
            </div>
            <hr className="opacity-20 mt-3" />
            <div className="mt-[0.875rem] flex flex-row gap-x-[0.5rem]">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex flex-row justify-center items-center">
                <SVGIcon className="stroke-white" Icon={PersonAudioCall} />
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-md flex flex-row justify-center items-center">
                <SVGIcon className="stroke-white" Icon={PersonVideoCall} />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm font-normal text-slate-200">Contact:</p>
              <div className="mt-4">
                <div className="flex flex-row items-center mt-[0.875rem]">
                  <SVGIcon className="stroke-white" Icon={PhoneCallIcon} />
                  <p className="text-white text-sm font-normal ml-[0.917rem]">{personDetails?.phone}</p>
                </div>
                <div className="flex flex-row items-center  mt-[0.875rem]">
                  <SVGIcon Icon={mailIcon} />
                  <p className="text-white text-sm font-normal ml-[0.917rem]">{personDetails?.email}</p>
                </div>
                <div className="flex flex-row items-center  mt-[0.875rem]">
                  <SVGIcon Icon={locationIcon} />
                  <p className="text-white text-sm font-normal ml-[0.917rem]">{personDetails?.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>

  );
}
