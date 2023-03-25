import {
  arrowDownIcon,
  ArrowRight,
  circleIcon,
  dragIcon,
  editIcon,
  IssueTypesIcon,
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
const personDetails = {
  id: 1,
  username: 'Moinul Islam',
  designation: 'MERN Developer',
  email: 'moinul@coredevs.ltd',
  phone: '+880 1235-889250',
  location: 'Core Devs Ltd.',
  isActive: true,
};

export { subData, personDetails };
