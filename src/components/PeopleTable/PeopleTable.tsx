import React, { FC } from 'react';
import { THead } from './THead';
import { Person } from '../../types/Person';

type Props = {
  people: Person[];
  isLoading: boolean;
};

export const PeopleTable: FC<Props> = React.memo(({ people, isLoading }) => {
  return (
    <table className="table">
      <THead />
      <tbody>
        {
          isLoading ? <tr><td>Loading...</td></tr> : (
            people.map((person) => (
              <tr key={person.name + person.lastname}>
                <td>
                  {person.name}
                </td>
                <td>
                  {person.lastname}
                </td>
                <td>
                  {person.age}
                </td>
                <td>
                  {person.sex}
                </td>
              </tr>
            ))
          )
        }
      </tbody>
    </table>
  );
});
