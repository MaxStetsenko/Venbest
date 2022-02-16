import { FilterNames } from '../types/FilterElement';

export const FILTERS_LIST = [
  {
    label: 'Имя',
    elements: [
      {
        name: FilterNames.Name,
        type: 'text',
      },
    ],
  },
  {
    label: 'Фамилия',
    elements: [
      {
        name: FilterNames.Lastname,
        type: 'text',
      },
    ],
  },
  {
    label: 'Возраст',
    elements: [
      {
        name: FilterNames.Age,
        type: 'text',
      },
    ],
  },
  {
    label: 'Пол',
    elements: [
      {
        name: FilterNames.Male,
        type: 'checkbox',
        text: 'М*',
      },
      {
        name: FilterNames.Female,
        type: 'checkbox',
        text: 'Ж*',
      },
    ],
  },
];
