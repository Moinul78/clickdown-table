import {
  editIcon,
  IssueTypesIcon,
  plusIcon,
  subtaskIcon,
  tagIcon,
} from './Assets/SVGcomponents';

const subData = [
  {
    id: 1,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 0,
    plusIcon,
    tagIcon,
    editIcon,
    subTask: [

    ],
  },
  {
    id: 2,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 2,
    plusIcon,
    tagIcon,
    editIcon,
    subTask: [
      {
        id: 1,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 2,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
    ],
  },
  {
    id: 3,
    issueTypesIcon: IssueTypesIcon,
    text: 'Custom Integration',
    subTaskIcon: subtaskIcon,
    subTaskQuantity: 3,
    plusIcon,
    tagIcon,
    editIcon,
    subTask: [
      {
        id: 1,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 2,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
      {
        id: 3,
        details: 'As a new Certified ScrumMaster, once my name has been loaded to the registry I am sent an email welcoming me to the Scrum Alliance and containing instructions on how to register/activate my membership',
      },
    ],
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
