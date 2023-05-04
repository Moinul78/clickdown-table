import React, { useEffect, useRef, useState } from 'react';
import { arrowDownIcon, CalendarIcon, cancel } from '../../Assets/SVGcomponents';
import useOnclickOutside from '../../Hooks/UseOnClickOutSide';
import SVGIcon from '../../SVGIcon/SVGIcon';

export default function CalendarData() {
  const [date, setDate] = useState(new Date());
  const [dueDate, setDueDate] = useState({ from: null, to: null });
  const [modalOpen, setModalOpen] = useState(false);
  const [borderRed, setBorderRed] = useState(false);
  const [edit, setEdit] = useState(false);
  // const [error, setError] = useState(false);
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

  function parseDate(dd) {
    if (!dd || typeof (dd) !== 'string') {
      return null;
    }
    const [d, m, y] = dd.split('/');
    return new Date(`${m}-${d}-${y}`);
  }
  function formatDate(dd) {
    const newDate = dd ? new Date(dd).toLocaleDateString('en-GB') : null;
    return newDate;
  }
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
  function calculateDaysInRange(range) {
    if (!range.from) {
      return null;
    }
    const differenceInDays = Math.ceil(((range.to)
      - (range.from)) / (1000 * 60 * 60 * 24));
    return differenceInDays > 0 ? differenceInDays : null;
  }
  function Input(d) {
    const newStartDate = dueDate.from?.getTime() >= new Date(d)?.getTime();
    const updatedDueDate = { ...dueDate, [!dueDate.from || newStartDate ? 'from' : 'to']: new Date(d) };
    setDueDate(updatedDueDate);
    if (!dueDate.from || newStartDate) {
      setDueDate((prevDueDate) => ({ ...prevDueDate, from: new Date(d) }));
      document.getElementById('startDate').value = formatDate(d);
    } else {
      setDueDate((prevDueDate) => ({ ...prevDueDate, to: new Date(d) }));
      document.getElementById('endDate').value = formatDate(d);
    }
    if (new Date(d)?.getTime() === dueDate.from?.getTime()) {
      setDueDate((prevDueDate) => {
        const newDueDate = { from: prevDueDate.to || null, to: null };
        document.getElementById('startDate').value = formatDate(newDueDate.from) || '';
        if (newDueDate.from) {
          document.getElementById('endDate').value = '';
        }
        return newDueDate;
      });
    }
    if (new Date(d)?.getTime() === dueDate.to?.getTime()) {
      setDueDate((prevDueDate) => ({ ...prevDueDate, to: null }));
      document.getElementById('endDate').value = null;
    }
  }
  function handleDateInput(event) {
    const targetId = event.target.id;
    const dateInput = event.target;
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const parentDiv = event.target.closest('div');

    if (!dateRegex.test(dateInput.value) && dateInput.value !== '') {
      parentDiv.style.border = '1px solid red';
    } else {
      parentDiv.style.border = 'none';

      const startDateInput = targetId === 'startDate' ? event.target.value : document.getElementById('startDate').value;
      const endDateInput = targetId === 'endDate' ? event.target.value : document.getElementById('endDate').value;
      const startDate = targetId === 'startDate' ? parseDate(startDateInput) : null;
      const endDate = targetId === 'endDate' ? parseDate(endDateInput) : null;
      setEdit(true);
      if (targetId === 'startDate' && !startDate) {
        return setDueDate((prev) => ({ ...prev, from: null }));
      }
      if (targetId === 'endDate' && !endDate) {
        console.log('endDate null');
        return setDueDate((prev) => ({ ...prev, to: null }));
      }
      if (startDate && !Number.isNaN(startDate.getTime())) {
        return setDueDate((prev) => ({ ...prev, from: startDate }));
      }
      if (endDate && !Number.isNaN(endDate.getTime() && dueDate.from)) {
        return setDueDate((prev) => ({ ...prev, to: endDate }));
      }
    }
    return dueDate;
  }

  const handleDateClick = (d) => {
    const newStartDate = dueDate.from?.getTime() >= new Date(d)?.getTime();
    const updatedDueDate = { ...dueDate, [!dueDate.from || newStartDate ? 'from' : 'to']: new Date(d) };
    setDueDate(updatedDueDate);
    if (new Date(d)?.getTime() === dueDate.from?.getTime()) {
      setDueDate((prevDueDate) => ({ ...prevDueDate, from: prevDueDate.to || null, to: null }));
    }
    if (new Date(d)?.getTime() === dueDate.to?.getTime()) {
      setDueDate((prevDueDate) => ({ ...prevDueDate, to: null }));
    }
  };
  useEffect(() => {
    if (dueDate.to) {
      setBorderRed(calculateDaysInRange(dueDate) <= 0);
    }
  }, [dueDate]);
  return (
    <div className="flex flex-row justify-center items-start relative cursor-pointer">
      <div onClick={() => setModalOpen(!modalOpen)} role="contentinfo" onKeyDown={() => setModalOpen(!modalOpen)} className="w-6 h-6 rounded-md right-1/3 flex flex-row justify-center items-center">
        {
          modalOpen === false
            && dueDate.to ? <p className="text-center font-semibold text-[0.688rem] text-[#64748B]">{formatDate(dueDate?.to)}</p>
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
                                ${(formatDate(dates) === formatDate(dueDate?.to)
                                      || formatDate(dates)
                                      === formatDate(!dueDate?.from ? false : dueDate?.from))
                                      ? 'bg-[#6239ED] text-white' : `${new Date(dates).getMonth() === month
                                        ? 'text-[#000316]' : 'text-[#64748B]'}`}                      
                                   ${(((dueDate?.from ? new Date(dueDate?.from).getTime() : NaN) < new Date(dates).getTime()) && (new Date(dueDate?.to).getTime() > new Date(dates).getTime()))
                                      ? 'rounded-none bg-[#EFEBFD]' : ''}`}
                                  onClick={() => {
                                    handleDateClick(dates);
                                    if (edit) { Input(dates); }
                                  }}
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
                          dueDate.to ? `Total ${calculateDaysInRange(dueDate) || 0} days` : 'Task deadline'
                        }
                      </h1>
                    </div>
                    <div>
                      <div>
                        <p className="w-[70px] first-line:font-medium text-[11px] leading-[16px] text-[#475569] ">Start date:</p>
                        <div className="border rounded-md" id="parent-div">
                          <div className="flex justify-start items-center py-2 w-[150px] h-[32px]">
                            <SVGIcon Icon={CalendarIcon} />
                            <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.3rem]">
                              <input onChange={(event) => handleDateInput(event)} defaultValue={dueDate?.from ? (formatDate(dueDate.from)) : ''} className="w-[110px] h-[25px] outline-none font-medium text-[11px] leading-[16px] text-[#475569] p-2" autoComplete="off" placeholder="dd/mm/yyyy" type="text" id="startDate" />
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="w-[70px] font-medium text-[11px] leading-[16px] text-[#475569] ">End date:</p>
                        <div id="parent-div" className={borderRed ? 'border border-red-900 rounded-md' : 'border rounded-md'}>
                          <div className="flex justify-start items-center py-2 w-[150px] h-[32px]">
                            <SVGIcon Icon={CalendarIcon} />
                            <h1 className="text-[#475569] text-sm leading-4 font-medium ml-[0.3rem]">
                              <input onChange={(event) => handleDateInput(event)} defaultValue={dueDate?.to ? formatDate(dueDate.to) : ''} className="w-[110px] h-[25px] outline-none font-medium text-[11px] leading-[16px] p-2" autoComplete="off" placeholder="dd/mm/yyyy" type="text" id="endDate" />
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => setModalOpen(false)} role="contentinfo" onKeyDown={() => { }} className="absolute w-full bottom-5">
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
