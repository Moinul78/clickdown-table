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
  function makeBold() {
    const text = document.getElementById('text');
    const icon = document.getElementById('boldIcon');
    if (text?.style.fontWeight === 'bold') {
      text.style.fontWeight = 'normal';
      icon.style.stroke = '';
    } else {
      text.style.fontWeight = 'bold';
      icon.style.stroke = '#6239ED';
      icon.style.borderRadius = '4px';
    }
  }
  function makeItalic() {
    const text = document.getElementById('text');
    const icon = document.getElementById('iconItalic');
    if (text.style.fontStyle === 'italic') {
      text.style.fontStyle = 'normal';
      icon.style.stroke = '';
    } else {
      text.style.fontStyle = 'italic';
      icon.style.stroke = '#6239ED';
      icon.style.borderRadius = '4px';
    }
  }
  function makeUnderLine() {
    const text = document.getElementById('text');
    const icon = document.getElementById('underlineIcon');
    if (text.style.textDecoration === 'underline') {
      text.style.textDecoration = 'none';
      icon.style.stroke = '';
    } else {
      text.style.textDecoration = 'underline';
      icon.style.stroke = '#6239ED';
      icon.style.borderRadius = '4px';
    }
  }
  function makeLineThrough() {
    const text = document.getElementById('text');
    const icon = document.getElementById('lineThroughIcon');
    if (text.style.textDecoration === 'line-through') {
      text.style.textDecoration = 'none';
      icon.style.stroke = '';
    } else {
      text.style.textDecoration = 'line-through';
      icon.style.stroke = '#6239ED';
      icon.style.borderRadius = '4px';
    }
  }
  function makeCapitalText() {
    const text = document.getElementById('text');
    const icon = document.getElementById('textCapitalFormat');
    if (text.style.textTransform === 'capitalize') {
      text.style.textTransform = 'none';
      icon.style.stroke = '';
    } else {
      text.style.textTransform = 'capitalize';
      icon.style.stroke = '#6239ED';
      icon.style.borderRadius = '4px';
    }
  }
  function makeSpaceLeft() {
    const text = document.getElementById('text');
    text.style.paddingLeft = '20px';
  }
  function makeSpaceRight() {
    const text = document.getElementById('text');
    text.style.paddingRight = '20px';
  }

  return (
    <div>
      <div className="border border-[#6239ED] bg-[#F8FAFC] rounded h-[9.188rem] p-[1rem] mb-[0.7rem] cursor-pointer">
        <div className="flex flex-row gap-x-2 mb-[0.7rem]">
          <div onClick={makeBold} id="boldIcon" role="contentinfo" onKeyDown={() => { }}>
            <SVGIcon Icon={BoldIcon} />
          </div>
          <div onClick={makeItalic} id="iconItalic" role="contentinfo" onKeyDown={() => { }}>
            <SVGIcon Icon={ItalicIcon} />
          </div>
          <div onClick={makeUnderLine} role="contentinfo" id="underlineIcon" onKeyDown={() => { }}>
            <SVGIcon Icon={UnderLineIcon} />
          </div>
          <div onClick={makeLineThrough} role="contentinfo" id="lineThroughIcon" onKeyDown={() => { }}>
            <SVGIcon Icon={FrameIcon3Icon} />
          </div>
          <SVGIcon Icon={chatinputlineIcon} />
          <SVGIcon Icon={TextColorIcon} />
          <div className="px-[2px]" onClick={makeCapitalText} id="textCapitalFormat" role="contentinfo" onKeyDown={() => { }}>
            <SVGIcon Icon={TextFormatIcon} />
          </div>
          <div onClick={makeSpaceLeft} id="spaceLeft" role="contentinfo" onKeyDown={() => { }}>
            <SVGIcon Icon={SpaceLeftAlignIcon} />
          </div>
          <div onClick={makeSpaceRight} role="contentinfo" onKeyDown={() => { }}>
            <SVGIcon Icon={SpaceRightAlignIcon} />
          </div>
          <SVGIcon Icon={AddNumberListAlignIcon} />
          <SVGIcon Icon={AddListAlignIcon} />
          <SVGIcon Icon={ApostropheIcon} />
          <SVGIcon Icon={LinkIcon} />
          <SVGIcon Icon={CodeIcon} />
        </div>
        <div className="">
          { }
          <textarea id="text" style={{ width: '100%', height: '4rem', resize: 'none' }} className="focus:outline-none select-text text-sm bg-[#F8FAFC] placeholder:text-slate-500 font-normal  focus:text-[#6239ED]" placeholder="Type a new message...">{ }</textarea>
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
