import {
  arrowDownIcon,
  ArrowRight,
  avatar1,
  avatar2,
  circleIcon,
  dragIcon,
  editIcon,
  HighPriority,
  IssueTypesIcon,
  LowPriority,
  MediumPriority,
  plusIcon,
  subtaskIcon,
  tagIcon,
} from './Assets/SVGcomponents';
// import arrowDownIcon from './Assets/Icons/arrow down.svg';
// import ArrowRight from './Assets/Icons/Arrowright.svg';
// import circleIcon from './Assets/Icons/circle 3.svg';
// import dragIcon from './Assets/Icons/Drag icon.svg';
// import editIcon from './Assets/Icons/edit-icon.svg';
// import IssueTypesIcon from './Assets/Icons/IssueTypes.svg';
// import plusIcon from './Assets/Icons/plus-sign.svg';
// import subtaskIcon from './Assets/Icons/Sub task.svg';
// import tagIcon from './Assets/Icons/tag-icon.svg';

const subData = [
  {
    id: 0,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 0,
    arrowDownIcon,
    ArrowRight,
    plusIcon,
    tagIcon,
    editIcon,
    dragIcon,
    subTask: [],
    isOpen: false,
  },
  {
    id: 1,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 2,
    arrowDownIcon,
    ArrowRight,
    plusIcon,
    tagIcon,
    editIcon,
    dragIcon,
    subTask: [
      {
        id: 1,
        circleIcon,
        dragIcon,
        ArrowRight,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
        child: [
          {
            id: 1,
            circleIcon,
            dragIcon,
            ArrowRight,
            details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
          },
          {
            id: 2,
            circleIcon,
            dragIcon,
            ArrowRight,
            details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to r,,egister/activate my membership',
          },
        ],
      },
      {
        id: 2,
        circleIcon,
        dragIcon,
        ArrowRight,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
    ],
    isOpen: false,
  },
  {
    id: 2,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 3,
    arrowDownIcon,
    ArrowRight,
    plusIcon,
    tagIcon,
    editIcon,
    dragIcon,
    subTask: [
      {
        id: 1,
        circleIcon,
        dragIcon,
        ArrowRight,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 2,
        circleIcon,
        dragIcon,
        ArrowRight,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 3,
        circleIcon,
        dragIcon,
        ArrowRight,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
    ],
    isOpen: false,
  },
];
const users = [
  {
    id: 1,
    name: 'Moinul Islam',
    icon: avatar1,
    isAdded: false,
  },
  {
    id: 2,
    name: 'Ramjan Ali Anik',
    icon: avatar2,
    isAdded: false,
  },
  {
    id: 3,
    name: 'Rakibul Yeasin',
    icon: avatar1,
    isAdded: false,
  },
  {
    id: 4,
    name: 'Mizanur Rahman Hasan',
    icon: avatar2,
    isAdded: false,
  },
  {
    id: 5,
    name: 'Jayeen Bin Alam',
    icon: avatar1,
    isAdded: false,
  },
  {
    id: 6,
    name: 'Rasel Miah',
    icon: avatar2,
    isAdded: false,
  },
];

const priority = [
  {
    id: 1,
    status: 'Low',
    flag: LowPriority,
    className: 'bg-[#22C55E] flex justify-left items-center text-white py-[4px] leading-[24px] text-semibold mb-1 rounded',
  },
  {
    id: 2,
    status: 'Medium',
    flag: MediumPriority,
    className: 'bg-[#FE7317] flex justify-left items-center text-white py-[4px] leading-[24px] text-semibold mb-1 rounded',
  },
  {
    id: 3,
    status: 'High',
    flag: HighPriority,
    className: 'bg-[#DC2626] flex justify-left items-center text-white py-[4px] leading-[24px] text-semibold mb-1 rounded',
  },
];

const Options = [
  {
    id: 1,
    value: '0',
  },
  {
    id: 2,
    value: '1',
  },
  {
    id: 3,
    value: '2',
  },
  {
    id: 4,
    value: '3',
  },
  {
    id: 5,
    value: '4',
  },
  {
    id: 6,
    value: '5',
  },
  {
    id: 7,
    value: '8',
  },
];

const Status = [
  {
    id: 1,
    status: 'TO DO',
    ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#475569] mr-[4px]',
    className: 'bg-[#E2E8F0] text-[#475569] flex justify-left items-center  text-bold my-2 px-[8px] w-[90px] h-[24px]  rounded-[4px]',
  },
  {
    id: 2,
    status: 'IN PROGRESS',
    ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#6239ED] mr-[4px]',
    className: 'bg-[#6239ed1a] text-[#475569] flex justify-left items-center  text-bold my-2 px-[4px] w-[115px] h-[24px]  rounded-[4px]',
  },
  {
    id: 3,
    status: 'IN REVIEW',
    ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#FE7317] mr-[4px]',
    className: 'bg-[#FFF1E8] text-[#475569] flex justify-left items-center  text-bold my-2 px-[8px] w-[105px] h-[24px] rounded-[4px]',
  },
  {
    id: 4,
    status: 'DONE',
    ellipsis: 'w-[6px] h-[6px] rounded-full bg-[#22C55E] mr-[4px]',
    className: 'bg-[#DCFCE7] text-[#475569] flex flex-row justify-left items-center  text-bold my-2 px-[8px] w-[80px] h-[24px] rounded-[4px]',
  },
];

export {
  subData,
  users,
  priority,
  Options,
  Status,
};
