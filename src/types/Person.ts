export interface Person {
  name: string,
  lastname: string,
  age: number,
  sex: 'm' | 'f',
}

// eslint-disable-next-line no-shadow
export enum PersonEnum {
  name = 'Имя',
  lastname = 'Фамилиия',
  age = 'Возраст',
  sex = 'Пол',
}
