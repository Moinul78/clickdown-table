import {
  arrowDownIcon,
  ArrowRight,
  avatar1,
  avatar2,
  dragIcon,
  editIcon,
  HighPriority,
  IssueTypesIcon,
  LowPriority,
  circleIcon,
  MediumPriority,
  plusIcon,
  subtaskIcon,
  tagIcon,
  flashIconTwo,
  flashIconOne,
  avatar3,
  fileIcon,
  downloadIcon,
  linkIcon,
} from './Assets/SVGcomponents';
import img1 from './Assets/Images/img1.jpg';
import img2 from './Assets/Images/img2.png';
import img3 from './Assets/Images/img3.jpg';

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
    circleIcon,
    dragIcon,
    IssueTypesIcon,
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
    circleIcon,
    subTask: [
      {
        id: 1,
        circle: circleIcon,
        dragIcon,
        rightArrow: ArrowRight,
        downArrow: arrowDownIcon,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 2,
        circle: circleIcon,
        dragIcon,
        rightArrow: ArrowRight,
        downArrow: arrowDownIcon,
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
        circle: circleIcon,
        dragIcon,
        rightArrow: ArrowRight,
        downArrow: arrowDownIcon,
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
        circle: circleIcon,
        dragIcon,
        rightArrow: ArrowRight,
        downArrow: arrowDownIcon,
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
        id: 3,
        circle: circleIcon,
        dragIcon,
        rightArrow: ArrowRight,
        downArrow: arrowDownIcon,
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
    ],
    isOpen: false,
  },
];
const users = [
  {
    id: 1,
    name: 'Moinul Islam',
    icon: avatar1,
    isActive: true,
  },
  {
    id: 2,
    name: 'Ramjan Ali Anik',
    icon: avatar2,
    isActive: false,
  },
  {
    id: 3,
    name: 'Rakibul Yeasin',
    icon: avatar3,
    isActive: true,
  },
  {
    id: 4,
    name: 'Mizanur Rahman Hasan',
    icon: avatar1,
    isActive: false,
  },
  {
    id: 5,
    name: 'Jayeen Bin Alam',
    icon: avatar2,
    isActive: true,
  },
  {
    id: 6,
    name: 'Rasel Miah',
    icon: avatar3,
    isActive: false,
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
const issuetypes = [
  {
    id: 0,
    type: 'None',
    icon: flashIconTwo,
    iconClass: 'w-6 h-6 bg-slate-200 rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 1,
    type: 'Epic',
    icon: flashIconOne,
    iconClass: 'w-6 h-6 bg-[#904EE2] flex flex-row justify-center items-center rounded-[0.188rem',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 2,
    type: 'Bug',
    icon: flashIconOne,
    iconClass: 'w-6 h-6 bg-[#E5493A] flex flex-row justify-center items-center rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 3,
    type: 'New Feature',
    icon: flashIconTwo,
    iconClass: 'w-6 h-6 bg-[#68B447] flex flex-row justify-center items-center rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 4,
    type: 'Improvement',
    icon: flashIconTwo,
    iconClass: 'w-6 h-6 bg-[#E5493A] flex flex-row justify-center items-center rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 5,
    type: 'Task',
    icon: flashIconTwo,
    iconClass: 'w-6 h-6 bg-[#4BADE8] flex flex-row justify-center items-center rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
  {
    id: 6,
    type: 'Sub Task',
    icon: flashIconTwo,
    iconClass: 'w-6 h-6 bg-[#FFA2C0] flex flex-row justify-center items-center rounded-[0.188rem]',
    textClass: 'text-slate-900 font-medium text-[0.688rem]',
  },
];

const pinnedMessages = [
  {
    id: 1,
    avatar: img1,
    username: 'Rakibul Yeasin',
    author: 'other',
    message: 'Hi, How are You?',
    unseen: 0,
    isWriting: true,
    time: '4.55 PM',
  },
  {
    id: 2,
    username: 'Moinul Islam',
    avatar: img2,
    author: 'other',
    message: 'Hi, How are You?',
    isWriting: true,
    unseen: 5,
    time: '4.55 PM',
  },
  {
    id: 3,
    username: 'Pranta Das',
    avatar: img3,
    message: 'Hi, How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: '4.55 PM',
  },
];
const RecentMessages = [
  {
    id: 1,
    avatar: img1,
    username: 'Moinul Islam',
    author: 'other',
    message: 'How are You?',
    unseen: 5,
    isWriting: false,
    time: '4.55 PM',
  },
  {
    id: 2,
    username: 'Ramjan Ali Anik',
    avatar: img2,
    author: 'other',
    message: 'How are You?',
    isWriting: true,
    unseen: 5,
    time: '4.55 PM',
  },
  {
    id: 3,
    username: 'Rakibul Yeasin',
    avatar: img3,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'yestarday',
  },
  {
    id: 4,
    username: 'Jayeen Bin Alam',
    avatar: img1,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'yestarday',
  },
  {
    id: 5,
    username: 'Walid Bin Jashim',
    avatar: img2,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'jan 23',
  },
  {
    id: 6,
    username: 'Mijanur Hasan',
    avatar: img3,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'Mar 24',
  },
  {
    id: 7,
    avatar: img1,
    username: 'Moinul Islam',
    author: 'other',
    message: 'How are You?',
    unseen: 5,
    isWriting: false,
    time: '4.55 PM',
  },
  {
    id: 8,
    username: 'Ramjan Ali Anik',
    avatar: img2,
    author: 'other',
    message: 'How are You?',
    isWriting: true,
    unseen: 5,
    time: '4.55 PM',
  },
  {
    id: 9,
    username: 'Rakibul Yeasin',
    avatar: img3,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'yestarday',
  },
  {
    id: 10,
    username: 'Jayeen Bin Alam',
    avatar: img1,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'yestarday',
  },
  {
    id: 11,
    username: 'Walid Bin Jashim',
    avatar: img2,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'jan 23',
  },
  {
    id: 12,
    username: 'Mijanur Hasan',
    avatar: img3,
    message: 'How are You?',
    author: 'other',
    isWriting: false,
    unseen: 0,
    time: 'Mar 24',
  },
];

const ChattingData = [
  {
    id: 1,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 2,
    avatar: img3,
    username: 'Moinul Islam',
    author: true,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 3,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 4,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 5,
    avatar: img3,
    username: 'Moinul Islam',
    author: true,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 6,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 7,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 8,
    avatar: img3,
    username: 'Moinul Islam',
    author: true,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 9,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 10,
    avatar: img1,
    username: 'Moinul Islam',
    author: false,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
  {
    id: 11,
    avatar: img3,
    username: 'Moinul Islam',
    author: true,
    message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    time: '4.55 PM',
  },
];
const PersonInformations = [
  {
    id: 1,
    avatar: img1,
    username: 'Moinul Islam',
    designation: 'MERN Developer',
    email: 'moinul@coredevs.ltd',
    phone: '+880 1717171717',
    location: 'Core Devs Ltd.',
    isActive: true,
  },
];

const Attachments = [
  {
    id: 1,
    fileIcon,
    fileName: 'Core Devs Ltd.docs',
    time: '25 Feb 2023',
    downloadIcon,

  },
  {
    id: 2,
    fileIcon,
    fileName: 'Core Devs Ltd.docs',
    time: '25 Feb 2023',
    downloadIcon,

  },
  {
    id: 3,
    fileIcon,
    fileName: 'Core Devs Ltd.docs',
    time: '25 Feb 2023',
    downloadIcon,

  },
  {
    id: 4,
    fileIcon,
    fileName: 'Core Devs Ltd.docs',
    time: '25 Feb 2023',
    downloadIcon,

  },
  {
    id: 5,
    fileIcon,
    fileName: 'Core Devs Ltd.docs',
    time: '25 Feb 2023',
    downloadIcon,

  },
];

const Links = [
  {
    id: 1,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
  {
    id: 2,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
  {
    id: 3,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
  {
    id: 4,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
  {
    id: 5,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
  {
    id: 6,
    linkIcon,
    linkAddress: 'https://www.coredevs.ltd/',
  },
];

export {
  subData,
  users,
  priority,
  Options,
  Status,
  issuetypes,
  pinnedMessages,
  RecentMessages,
  ChattingData,
  PersonInformations,
  Attachments,
  Links,
};
