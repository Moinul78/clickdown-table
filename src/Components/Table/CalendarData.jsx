import React, { useRef, useState } from 'react';
import { arrowDownIcon, CalendarIcon, cancel } from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function CalendarData() {
  const [date, setDate] = useState(new Date());
  const [dueDate, setDueDate] = useState({ from: null, to: null });
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef();
  useOnclickOutside(ref, () => setModalOpen(false));
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const firstDayOfWeek = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeksInMonth = Math.ceil((firstDayOfWeek + daysInMonth) / 7);
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };
  const handleNextMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };
  const calendar = [];
  let dayCount = 1;
  let prevMonthDay = firstDayOfWeek;
  for (let week = 0; week < weeksInMonth; week += 1) {
    calendar[week] = [];
    for (let day = 0; day < 7; day += 1) {
      if (week === 0 && day < firstDayOfWeek) {
        prevMonthDay -= 1;
        calendar[week][day] = new Date(year, month - 1, daysInPrevMonth - prevMonthDay);
      } else if (dayCount > daysInMonth) {
        prevMonthDay += 1;
        calendar[week][day] = new Date(year, month + 1, prevMonthDay);
      } else {
        calendar[week][day] = new Date(year, month, dayCount);
        dayCount += 1;
      }
    }
  }
  const handleDateClick = (d) => {
    const newStartDate = dueDate.from >= d;
    if (!dueDate.from || newStartDate) {
      setDueDate((prev) => ({ ...prev, from: new Date(d) }));
    } else {
      setDueDate((prev) => ({ ...prev, to: new Date(d) }));
    }
    if (new Date(dueDate.from).getTime() === new Date(d).getTime()) {
      setDueDate({ from: null });
    }
    if (new Date(dueDate.to).getTime() === new Date(d).getTime()) {
      setDueDate({ to: null });
    }
  };
  function InputStartDate() {
    const startDateInput = document.getElementById('startDate').value;
    console.log(startDateInput);
    if (dueDate.from === null || !dueDate.from) {
      if (startDateInput.length === 10) {
        setDueDate((prev) => ({ ...prev, from: (startDateInput) }));
      }
      console.log(dueDate);
    }
  }
  function InputEndDate() {
    const endDateInput = document.getElementById('endDate').value;
    console.log(endDateInput);
    if (dueDate.to === null || !dueDate.to) {
      if (endDateInput.length === 10) {
        setDueDate((prev) => ({ ...prev, to: (endDateInput) }));
      }
    }
  }
  function setInputDate() {
    setModalOpen(false);
  }

  function calculateDaysInRange(range) {
    const startDate = new Date(range.from);
    const endDate = new Date(range.to);
    const differenceInMs = endDate.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return differenceInDays + 1;
  }
  /*
  <input className="w-[70px] h-[25px] font-medium text-[11px]
  leading - [16px] text - [#475569] p - 2" placeholder="Start Date" type="text"
  id = "startDate" pattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}" />
  */
  return (
    <div className="flex flex-row justify-center items-start relative cursor-pointer">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => setModalOpen(!modalOpen)} className="w-6 h-6 rounded-md right-1/3 flex flex-row justify-center items-center">
        {
          modalOpen === false
            && dueDate.to ? <p className="text-center font-semibold text-[0.688rem] text-[#64748B]">{new Date(dueDate.to).toLocaleDateString()}</p>
            : <SVGIcon Icon={CalendarIcon} />
        }

      </div>
      {
        modalOpen && (
          <div ref={ref} style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className="absolute z-10 right-1/3 top-6 bg-white shadow-xl rounded-md">
            <div className="flex justify-center items-center border w-[26.25rem] overflow-hidden rounded-lg">
              <div className="p-5 w-64 flex">
                <div className="w-56">
                  <div className="flex justify-between items-center px-2 py-1">
                    <button onClick={() => handlePrevMonth()}>
                      <SVGIcon Icon={arrowDownIcon} className="stroke-[#6239ED] rotate-90" />
                    </button>
                    <h1 className="text-xs font-semibold">
                      {`${monthNames[month]} ${year}`}
                    </h1>
                    <button onClick={() => handleNextMonth()}>
                      <SVGIcon Icon={arrowDownIcon} className="stroke-[#6239ED] rotate-[270deg]" />
                    </button>
                  </div>
                  <table className="border-collapse">
                    <thead>
                      <tr>
                        {
                          weekdays.map((each, i = 1) => (
                            <th key={i} className="text-center text-xs font-semibold h-8 w-8 text-[#64748B]">
                              {each}
                            </th>
                          ))
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {
                        calendar.map((week, i = 1) => (
                          <tr key={i}>
                            {
                              week.map((dates, j = 1) => (
                                <td
                                  key={j}
                                  className={`text-center text-xs font-semibold h-8 w-8 transition-all duration-300 rounded-lg cursor-pointer
                                ${(new Date(dates).toLocaleDateString() === new Date(dueDate?.to).toLocaleDateString()
                                      || new Date(dates).toLocaleDateString()
                                      === new Date(dueDate?.from).toLocaleDateString())
                                      ? 'bg-[#6239ED] text-white' : `${new Date(dates).getMonth() === month
                                        ? 'text-[#000316]' : 'text-[#64748B]'}`}                       
                                   ${((new Date(dueDate?.from).getTime() < new Date(dates).getTime()) && (new Date(dueDate?.to).getTime() > new Date(dates).getTime()))
                                      ? 'rounded-none bg-[#EFEBFD]' : ''}`}
                                  onClick={() => handleDateClick(dates)}
                                  onKeyDown={() => { }}
                                >
                                  {new Date(dates).getDate()}
                                </td>
                              ))
                            }
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-center bg-[#F8FAFC] h-[16.375rem] w-[10.25rem] relative">
                <div className="mt-9">
                  <div className="absolute top-2 right-2">
                    <SVGIcon onClick={() => setModalOpen(false)} Icon={cancel} />
                  </div>
                  <div className="">
                    <div className="mb-2">
                      <h1 className="text-xs font-medium text-[#64748B] py-[0.125rem]">Project deadline</h1>
                      <h1 className="text-sm leading-4 font-semibold text-[#6239ED] py-[0.125rem]">
                        {
                          dueDate.to ? `Total ${calculateDaysInRange(dueDate)} days` : 'Task deadline'
                        }
                      </h1>
                    </div>
                    <div>
                      <div>
                        <p className="w-[70px] first-line:font-medium text-[11px] leading-[16px] text-[#475569] ">Start date:</p>
                        <div className="border rounded-md">
                          <div className="flex justify-start items-center py-2  w-[150px] h-[32px]">
                            <SVGIcon Icon={CalendarIcon} />
                            <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.3rem]">
                              {
                                dueDate.from ? new Date(dueDate.from).toLocaleDateString() : <input onChange={InputStartDate} className="w-[110px] h-[25px] outline-none font-medium text-[11px] leading-[16px] text-[#475569] p-2" autoComplete="off" placeholder="yyyy/mm/dd" type="text" id="startDate" pattern="(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)" />
                              }
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="w-[70px] font-medium text-[11px] leading-[16px] text-[#475569] ">End date:</p>
                        <div className="border rounded-md">
                          <div className="flex justify-start items-center py-2 w-[150px] h-[32px]">
                            <SVGIcon Icon={CalendarIcon} />
                            <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.3rem]">
                              {
                                dueDate.to ? new Date(dueDate.to).toLocaleDateString() : <input onChange={InputEndDate} className="w-[110px] h-[25px] outline-none font-medium text-[11px] leading-[16px] p-2" autoComplete="off" placeholder="yyyy/mm/dd" type="text" id="endDate" pattern="(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)" />
                              }
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={setInputDate} role="contentinfo" onKeyDown={() => { }} className="absolute w-full bottom-5">
                    <button className="w-32 bg-[#6239ED] py-[0.375rem] text-sm text-center text-white leading-4 font-medium rounded-md">
                      Set date
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>

  );
}
