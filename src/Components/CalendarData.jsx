import React, { useState } from "react";
import { timeIcon } from '../Assets/SVGcomponents';
import SVGIcon from '../SVGIcon/SVGIcon';
import "./CalendarData.css"

const CalendarData = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  return (
    <div className='flex flex-row justify-center items-start relative'>
      <div onClick={() => setModalOpen(!modalOpen)} className='w-6 h-6 '>
        <SVGIcon Icon={timeIcon} />
      </div>
      {
        modalOpen && (
          <div style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)' }} className='absolute z-10 w-[25rem] p-5 right-1/3 top-8 h-auto   bg-white rounded-md'>

            <div class="calendar">
              <header>
                <h1>March 2023</h1>
              </header>

              <ul class="weekdays">
                {
                  days.map(day => (
                    <li>{day}</li>
                  ))
                }
              </ul>

              <ol class="day-grid">
                <li class="month=prev">29</li>
                <li class="month=prev">30</li>
                <li class="month=prev">31</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li class="month-next">1</li>
                <li class="month-next">2</li>
              </ol>

            </div>
          </div>
        )
      }
    </div>
  );
};

export default CalendarData;