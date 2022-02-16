import React, { useEffect, useState, useMemo } from 'react';
import { FilterRow } from './components/Filters/FilterRow';
import { PeopleTable } from './components/PeopleTable/PeopleTable';
import { FilterElement } from './types/FilterElement';
import { Person } from './types/Person';
import { getPeople } from './utils/api';
import { FILTERS_LIST } from './utils/filters';

interface State {
  name: string,
  lastname: string,
  age: string,
  male: boolean,
  female: boolean,
}

export const App: React.FC = () => {
  const [peopleServer, setPeopleServer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<State>({
    name: '',
    lastname: '',
    age: '',
    male: false,
    female: false,
  });

  useEffect(() => {
    setIsLoading(true);

    getPeople()
      .then(people => {
        setPeopleServer(people);
        setIsLoading(false);
      });
  }, []);

  const modifyPeople = useMemo(() => peopleServer.filter((person: Person) => {
    return (
      person.name.toLowerCase().includes(filters.name.toLowerCase())
      && person.lastname.toLowerCase().includes(filters.lastname.toLowerCase())
      && person.age.toString().includes(filters.age)
      && (
        (person.sex === 'f' && filters.female)
        || (person.sex === 'm' && filters.male)
        || (!filters.female && !filters.male)
      )
    );
  }), [peopleServer, filters]);

  const handlerChangeInput = (attr: string, value?: string) => {
    switch (attr) {
      case 'name':
      case 'lastname':
      case 'age':
        setFilters((prev) => ({ ...prev, [attr]: value }));
        break;

      case 'male':
      case 'female':
        setFilters((prev) => ({ ...prev, [attr]: !prev[attr] }));
        break;

      default:
        break;
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="people">
          <div className="people__table">
            <PeopleTable
              people={modifyPeople}
              isLoading={isLoading}
            />
          </div>
          <div className="people__filters">
            <h3 className="mb-20">Фильтры:</h3>
            {
              FILTERS_LIST.map(el => (
                <FilterRow
                  key={el.label}
                  label={el.label}
                >
                  {
                    el.elements.map((element: FilterElement) => {
                      if (element.type === 'checkbox') {
                        return (
                          <label
                            htmlFor={element.name}
                            key={element.name}
                            className={`input input__${element.type}`}
                          >
                            <input
                              id={element.name}
                              key={element.name}
                              type={element.type}
                              name={element.name}
                              checked={filters[element.name] as boolean}
                              onChange={() => handlerChangeInput(element.name)}
                            />
                            {element.text && <span>{element.text}</span>}
                          </label>
                        );
                      }

                      return (
                        <label
                          htmlFor={element.name}
                          key={element.name}
                          className={`input input__${element.type}`}
                        >
                          <input
                            id={element.name}
                            key={element.name}
                            type={element.type}
                            name={element.name}
                            value={filters[element.name] as string}
                            onChange={(e) => handlerChangeInput(element.name, e.target.value)}
                          />
                        </label>
                      );
                    })
                  }
                </FilterRow>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
