import React from 'react';
import SVGIcon from '../../SVGIcon/SVGIcon';
import img1 from '../../Assets/Images/img1.jpg';
import {
  chatIcon,
  dashboardIcon,
  fileIcon,
  homeIcon,
  lightModeIcon,
  notificationIcon,
  settingIcon,
} from '../../Assets/SVGcomponents';

export default function SideBar() {
  return (
    <div className="w-[4rem] min-h-[100vh] flex flex-col justify-between border-0 border-r-[0.063rem] bg-[#F8FAFC] border-[#E2E8F0]">
      <div className="flex flex-col items-center gap-y-6 py-5 cursor-pointer">
        <a to="/Chat">
          <SVGIcon Icon={homeIcon} />
        </a>
        <a to="/Dashboard">
          <SVGIcon Icon={dashboardIcon} />
        </a>
        <a to="/Projects">
          <SVGIcon Icon={fileIcon} />
        </a>
        <a to="/Chat">
          <SVGIcon Icon={chatIcon} />
        </a>
        <a to="/Notification">
          <SVGIcon className="hover:stroke-[#6239ED] stroke-slate-600" Icon={notificationIcon} />
        </a>
        <a to="/Setting">
          <SVGIcon Icon={settingIcon} />
        </a>
      </div>
      <div className="pb-[2.625rem] flex flex-col items-center gap-y-6">
        <button>
          <SVGIcon Icon={lightModeIcon} />
        </button>
        <button>
          <img src={img1} className="w-10 h-10 rounded-full" alt="" />
        </button>
      </div>
    </div>
  );
}
