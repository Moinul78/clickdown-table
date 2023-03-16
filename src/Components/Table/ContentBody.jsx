import React, { useEffect, useState } from 'react';
import { addUserIcon, IssueTypesIcon, arrowDownIcon, arrowRightIcon, circleIcon, dragIcon, editIcon, flagIcon, plusIcon, starCircleIcon, avatar1, avatar2, subtaskIcon, tagIcon, timeIcon, avatar3 } from '../../Assets/SVGcomponents';
import SVGIcon from '../../SVGIcon/SVGIcon';
import DropDown from './DropDown';
import SubTask from './SubTask';
import styles from './Table.module.css';

const ContentBody = (props) => {
  const { showSubTask, setshowSubTask } = props.state;
  const value = props.value;
  const { showTask, setShowTask } = props.state;
  const [addUser, setAddUser] = useState(null)
  const [modalOpen, setModalOpen] = useState(false);

  const users = [
    {
      "name": "Moinul Islam",
      "icon": avatar1,
    },
    {
      "name": "Ramjan Ali Anik",
      "icon": avatar2
    },
    {
      "name": "Rasel Miah",
      "icon": avatar3
    }

  ]

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
      <tr className={` hover:bg-slate-50 ${styles.tableRow}`}>
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
        <td >
          <div onClick={() => setModalOpen(!modalOpen)} className='flex flex-row justify-center items-center py-5'>
            <SVGIcon Icon={addUserIcon} />
          </div>
          {
            modalOpen && (
              <div className='absolute z-10 w-[11.063em] h-auto  bg-white rounded-md'>
                <div className='bg-slate-50 px-3 py-2'>
                  <p className='text-[0.688rem] text-slate-500 font-medium'>Search...</p>
                </div>
                <div className='pl-3'>
                  {
                    users.map(user => {
                      console.log(user.name);
                      <div className='flex flex-row items-center gap-x-3'>
                        <div className='w-6 h-6 bg-primary flex flex-row justify-center items-center rounded-[0.188rem]'>
                          <SVGIcon Icon={user.icon} />
                        </div>
                        <p className='text-slate-900 font-medium text-[0.688rem]'>{user.name}</p>
                      </div>
                    })
                  }
                </div>

                <button className='pl-3 py-2 text-slate-500 font-medium text-[0.688rem] underline'>Add/edit options</button>

              </div>
            )
          }

        </td>
        <td>
          <div>
            <DropDown />
          </div>
        </td>
        <td >
          <div className='flex flex-row justify-center items-center'>
            <p className='text-slate-600 text-sm font-medium '>15 Mar</p>
          </div>
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
        [1, 2].map(i => <tr><SubTask /></tr>)
      }
      {
        showTask &&
        // <SubTask />
        [1, 2, 3].map(i => <tr><SubTask /></tr>)
      }

    </tbody>
  );
};

export default ContentBody;