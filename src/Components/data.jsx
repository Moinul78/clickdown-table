/* eslint-disable no-shadow *//* eslint-disable react/no-array-index-key */import React, { useState } from 'react';
import {
  arrowDownIcon,
  CalendarIcon,
  plusIcon,
} from '../Assets/SVGcomponents';

import SVGIcon from '../SVGIcon/SVGIcon';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [dueDate, setDueDate] = useState({ from: null, to: null });

  const handlePrevMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  /**   * these variables are used to calculate the date of the selected month   */
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, 1);
  const firstDayWeekDay = firstDate.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalWeek = Math.ceil((firstDayWeekDay + daysInMonth) / 7);
  /**  * this variable is the main calander  */
  const calendar = [];
  /**   * this scope  is used to generate the calendar.   */
  let dayCount = 1;
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  let prevMonthDay = firstDayWeekDay;
  for (let week = 0; week < totalWeek; week += 1) {
    calendar[week] = [];
    for (let day = 0; day < 7; day += 1) {
      if (week === 0 && day < firstDayWeekDay) {
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
  const handleDateClick = (date) => {
    if (!dueDate.from) {
      setDueDate((prev) => ({ ...prev, from: new Date(date) }));
    } else {
      setDueDate((prev) => ({ ...prev, to: new Date(date) }));
    }
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    setDueDate({ from: null, to: null });
  };
  function calculateDaysInRange(range) {
    // Convert date strings to Date objects
    const startDate = new Date(new Date(range.from).toLocaledatetring());
    const endDate = new Date(new Date(range.to).toLocaledatetring());
    // Calculate the difference in milliseconds
    const differenceInMs = endDate.getTime() - startDate.getTime();
    // Convert the difference to days
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    console.log(startDate);
    console.log(endDate);
    console.log(differenceInMs);
    console.log(differenceInDays);
    return differenceInDays + 1;
  }
  return (
    <div onContextMenu={(e) => handleContextMenu(e)} className="flex justify-center items-center border w-[26.25rem] rounded-lg">
      <div className="p-5 flex">
        <div>
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
                  weekdays.map((each) => (
                    <th
                      className="text-center text-xs font-semibold h-8 w-8 text-[#64748B]"
                      key={each}
                    >
                      {each}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                calendar.map((week) => (
                  <tr>
                    {
                      week.map((date) => (
                        <td
                          className={`text-center text-xs font-semibold h-8 w-8 cursor-pointer transition-all duration-300 rounded-lg
                          ${(new Date(date).toLocaledatetring() === new Date(dueDate?.to).toLocaledatetring() || new Date(date).toLocaledatetring() === new Date(dueDate?.from).toLocaledatetring()) ? 'bg-[#6239ED] text-white' : `${new Date(date).getMonth() === month ? 'text-[#000316]' : 'text-[#64748B]'}`}
                          ${((new Date(dueDate?.from).getTime() < new Date(date).getTime()) && (new Date(dueDate?.to).getTime() > new Date(date).getTime())) ? 'rounded-none bg-[#EFEBFD]' : ''}`}
                          onClick={() => handleDateClick(date)}
                          onKeyDown={() => { }}
                        >
                          {new Date(date).getDate()}
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
            <SVGIcon Icon={plusIcon} className="rotate-45" />
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
              <div className="border rounded-md my-1">
                <div className="flex justify-start items-center p-2">
                  <SVGIcon Icon={CalendarIcon} />
                  <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.875rem] mr-2">
                    {
                      dueDate.from ? new Date(dueDate.from).toLocaledatetring() : 'Start date'
                    }
                  </h1>
                </div>
              </div>
              <div className="border rounded-md my-1">
                <div className="flex justify-start items-center p-2">
                  <SVGIcon Icon={CalendarIcon} />
                  <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.875rem] mr-2">
                    {
                      dueDate.to ? new Date(dueDate.to).toLocaledatetring() : 'End date'
                    }
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full bottom-5">
            <button className="w-32 bg-[#6239ED] py-[0.375rem] text-sm text-center text-white leading-4 font-medium rounded-md">
              Set date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
