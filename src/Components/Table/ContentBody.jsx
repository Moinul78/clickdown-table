import React from 'react';
import { IssueTypesIcon, arrowDownIcon, arrowRightIcon, circleIcon, dragIcon, editIcon, flagIcon, plusIcon, starCircleIcon, subtaskIcon, tagIcon, timeIcon, avatar3 } from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import CalendarData from '../CalendarData';
import DropDown from './DropDown';
import SelectUser from './SelectUser';
import SubTask from './SubTask';
import styles from './Table.module.css';

const ContentBody = (props) => {
  const { showSubTask, setshowSubTask } = props.state;
  const value = props.value;
  const { showTask, setShowTask } = props.state;

  // const [data1, setData] = useState(null);
  // useEffect(() => {
  //   fetch('../../data.json')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       console.log(json)
  //     })
  //     .catch((error) => console.error(error))
  // }, []);
  // console.log(data1)
  return (
    <tbody>
      <tr className={`hover:bg-slate-50 ${styles.tableRow}`}>
        <td >
          <div className=' '>
            {/* col-1 */}
            <div className='flex flex-row justify-center items-center gap-x-2'>
              <SVGIcon Icon={circleIcon} />
              <SVGIcon Icon={dragIcon} />
              {
                value <= 2 ?
                  <div onClick={() => setshowSubTask(!showSubTask)}>
                    {
                      showSubTask ? (<SVGIcon Icon={arrowDownIcon} />) : (<SVGIcon Icon={arrowRightIcon} />)
                    }
                  </div>
                  :
                  <div onClick={() => setShowTask(!showTask)}>
                    {
                      showTask ? (<SVGIcon Icon={arrowDownIcon} />) : (<SVGIcon Icon={arrowRightIcon} />)
                    }
                  </div>
              }
            </div>
          </div>
        </td>
        <td>
          <div className='w-6 h-6 rounded-md bg-primary flex flex-row justify-center items-center'>
            <SVGIcon Icon={IssueTypesIcon} />
          </div>
        </td>
        <td className='w-2/5'>
          <div className='flex flex-row justify-start items-center gap-x-2 '>
            <h3 className='text-heading text-sm font-medium'>Custom Integration</h3>
            <div className='flex flex-row items-center'>
              <SVGIcon Icon={subtaskIcon} />
              <p className='text-slate-500 font-medium text-[0.688rem] ml-[0.3rem]'>{value}</p>
            </div>
            <SVGIcon className={`${styles.summaryIcons}`} Icon={plusIcon} />
            <SVGIcon className={`${styles.summaryIcons}`} Icon={tagIcon} />
            <SVGIcon className={`${styles.summaryIcons}`} Icon={editIcon} />
          </div>
        </td>
        <SelectUser />
        <td>
          <div>
            <DropDown />
          </div>
        </td>
        <td >
          <CalendarData />
        </td>
        <td>
          <div className='flex flex-row justify-center items-center'>
            <SVGIcon Icon={timeIcon} />
          </div>
        </td>
        <td >
          <div className='flex flex-row items-center justify-center gap-x-[0.354rem]'>
            <SVGIcon Icon={starCircleIcon} />
            <p className='text-slate-500 font-medium text-[0.688rem]'>5</p>
          </div>
        </td>
        <td >
          <div className='flex flex-row justify-center items-center'>
            <SVGIcon Icon={flagIcon} />
          </div>
        </td>
      </tr>
      {
        showSubTask &&
        // <SubTask />
        [1, 2].map(i => <tr><SubTask key={i} /></tr>)
      }
      {
        showTask &&
        // <SubTask />
        [1, 2, 3].map(i => <tr><SubTask key={i} /></tr>)
      }

    </tbody>
  );
};

export default ContentBody;