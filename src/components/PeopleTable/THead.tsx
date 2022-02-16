import React from 'react';
import { PersonEnum } from '../../types/Person';

export const THead = () => {
  const theadTitles = Object.values(PersonEnum);

  return (
    <thead>
      <tr>
        {
          theadTitles.map((el: string) => (
            <th key={el}>
              {el}
              :
            </th>
          ))
        }
      </tr>
    </thead>
  );
};
