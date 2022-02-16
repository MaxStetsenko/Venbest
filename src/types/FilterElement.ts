export interface FilterElement {
  name: FilterNames,
  type: string,
  text?: string,
}

// eslint-disable-next-line no-shadow
export enum FilterNames {
  Female = 'female',
  Male = 'male',
  Age = 'age',
  Name = 'name',
  Lastname = 'lastname',
}
