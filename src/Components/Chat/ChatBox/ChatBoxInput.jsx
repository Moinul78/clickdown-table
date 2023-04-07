import React from 'react';
import {
  AddListAlignIcon,
  AddNumberListAlignIcon,
  ApostropheIcon,
  BoldIcon,
  CodeIcon,
  FrameIcon3Icon,
  ItalicIcon,
  LinkIcon,
  SpaceLeftAlignIcon,
  SpaceRightAlignIcon,
  TextColorIcon,
  TextFormatIcon,
  Ttext,
  UnderLineIcon,
  attachmentIcon,
  chatinputlineIcon,
  imageIcon,
  micIcon,
  sendIcon,
  smileIcon,
} from '../../../Assets/SVGcomponents';
import SVGIcon from '../../../SVGIcon/SVGIcon';

export default function ChatBoxInput() {
  return (
    <div>
      <div className="border border-[#6239ED] bg-[#F8FAFC] rounded h-[9.188rem] p-[1rem] mb-[0.7rem]">
        <div className="flex flex-row gap-x-2 mb-[0.7rem]">
          <SVGIcon Icon={BoldIcon} />
          <SVGIcon Icon={ItalicIcon} />
          <SVGIcon Icon={UnderLineIcon} />
          <SVGIcon Icon={FrameIcon3Icon} />
          <SVGIcon Icon={chatinputlineIcon} />
          <SVGIcon Icon={TextColorIcon} />
          <SVGIcon Icon={TextFormatIcon} />
          <SVGIcon Icon={SpaceLeftAlignIcon} />
          <SVGIcon Icon={SpaceRightAlignIcon} />
          <SVGIcon Icon={AddNumberListAlignIcon} />
          <SVGIcon Icon={AddListAlignIcon} />
          <SVGIcon Icon={ApostropheIcon} />
          <SVGIcon Icon={LinkIcon} />
          <SVGIcon Icon={CodeIcon} />
        </div>
        <div className="">
          <textarea style={{ width: '100%', height: '4rem', resize: 'none' }} className="focus:outline-none text-sm bg-[#F8FAFC] placeholder:text-slate-500 font-normal  focus:text-[#6239ED]" name="message" id="message" placeholder="Type a new message...">{ }</textarea>
        </div>
      </div>
      <div className="flex flex-row justify-between mb-[1.13rem]">
        <div className="flex flex-row gap-x-2">
          <SVGIcon Icon={Ttext} />
          <SVGIcon Icon={smileIcon} />
          <SVGIcon Icon={imageIcon} />
          <SVGIcon Icon={attachmentIcon} />
        </div>
        <div className="flex flex-row gap-x-2">
          <SVGIcon Icon={micIcon} />
          <SVGIcon Icon={sendIcon} />
        </div>
      </div>
    </div>
  );
}
