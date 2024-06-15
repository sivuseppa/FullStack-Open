/* eslint-disable react/prop-types */
const Persons = ({ persons, filterWith }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterWith.toLowerCase()))
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
