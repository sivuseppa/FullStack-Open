/* eslint-disable react/prop-types */

import Button from './Button';

const Person = ({ person, handleRemove }) => {
  return (
    <p>
      {person.name} {person.number} <Button type='button' onClick={() => handleRemove(person.id)} text='Delete' />
    </p>
  );
};

export default Person;
