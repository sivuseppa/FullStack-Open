/* eslint-disable react/prop-types */
import Person from './Person';

const Persons = ({ persons, filterWith, handleRemove }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterWith.toLowerCase()))
        .map((person) => (
          <Person key={person.id} person={person} handleRemove={handleRemove} />
        ))}
    </div>
  );
};

export default Persons;
