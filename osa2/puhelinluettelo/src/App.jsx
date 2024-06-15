import { useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWith, setFilterWith] = useState('');

  const handleOnChange = (setter) => {
    return (event) => setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterWith={filterWith} onChange={handleOnChange(setFilterWith)} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        setters={{ setNewName: setNewName, setNewNumber: setNewNumber }}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterWith={filterWith} />
    </div>
  );
};

export default App;
