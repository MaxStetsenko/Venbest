import React, { FC } from 'react';

type Props = {
  label: string
};

export const FilterRow: FC<Props> = ({ children, label }) => {
  return (
    <div className="filters__row">
      <div className="filters__title">
        {label}
        :
      </div>
      {children}
    </div>
  );
};
