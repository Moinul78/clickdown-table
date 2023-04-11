import React from 'react';

export default function InputBox() {
  const boldButton = document.getElementById('bold-btn');
  const italicButton = document.getElementById('italic-btn');
  const underlineButton = document.getElementById('underline-btn');
  const strikeThroughButton = document.getElementById('strike-through-btn');
  const justifyLeftButton = document.getElementById('justify-left-btn');
  const justifyCenterButton = document.getElementById('justify-center-btn');
  const justifyRightButton = document.getElementById('justify-right-btn');
  const justifyFullButton = document.getElementById('justify-full-btn');
  const unorderedListButton = document.getElementById('unordered-list-btn');
  const orderedListButton = document.getElementById('ordered-list-btn');
  const editor = document.querySelector('editor');

  boldButton?.addEventListener('click', () => {
    document.execCommand('bold', false, null);
  });
  italicButton?.addEventListener('click', () => {
    document.execCommand('italic', false, null);
  });

  underlineButton?.addEventListener('click', () => {
    document.execCommand('underline', false, null);
  });

  strikeThroughButton?.addEventListener('click', () => {
    document.execCommand('strikeThrough', false, null);
  });

  justifyLeftButton?.addEventListener('click', () => {
    document.execCommand('justifyLeft', false, null);
  });

  justifyCenterButton?.addEventListener('click', () => {
    document.execCommand('justifyCenter', false, null);
  });

  justifyRightButton?.addEventListener('click', () => {
    document.execCommand('justifyRight', false, null);
  });

  justifyFullButton?.addEventListener('click', () => {
    document.execCommand('justifyFull', false, null);
  });

  unorderedListButton?.addEventListener('click', () => {
    document.execCommand('insertUnorderedList', false, null);
  });

  orderedListButton?.addEventListener('click', () => {
    document.execCommand('insertOrderedList', false, null);
  });

  editor?.addEventListener('input', () => {
    const content = editor.innerHTML;
    console.log(content);
  });
  return (
    <div>
      <div className="border-gray-300 border-2 p-4">
        <div className="flex mb-4">
          <button id="bold-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold"><b>B</b></button>
          <button id="italic-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold"><i>I</i></button>
          <button id="underline-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold"><u>U</u></button>
          <button id="strike-through-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold"><s>S</s></button>
          <button id="justify-left-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold">justifyleft</button>
          <button id="justify-center-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold">justifyCenter</button>
          <button id="justify-right-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold">justifyRight</button>
          <button id="justify-full-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold">justifyFull</button>
          <button id="unordered-list-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 mr-2 font-bold">unorderedList</button>
          <button id="ordered-list-btn" className="bg-gray-200 hover:bg-gray-300 border-gray-400 border-2 rounded py-1 px-2 font-bold">orderedList</button>
        </div>
        <div id="editor" className="border-gray-400 border-2 min-h-[200px] p-2" contentEditable>
          { }
        </div>
      </div>
    </div>
  );
}
