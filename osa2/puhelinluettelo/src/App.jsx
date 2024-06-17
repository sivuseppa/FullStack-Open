import { useState, useEffect } from 'react';

import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';

import personService from './services/persons';

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWith, setFilterWith] = useState('');
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState({ message: null, type: null });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleOnChange = (setter) => {
    return (event) => setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const person = persons.find((person) => person.name === newName);

    if (person) {
      alert(`${newName} is already added to phonebook, replace the old number with a new one?`);
      personService
        .update(person.id, { ...person, number: newNumber })
        .then((response) => {
          setPersons(persons.map((p) => (p.id === person.id ? response : p)));

          setNotification({
            message: `A phone number of '${person.name}' has been updated.`,
            type: 'notice',
          });
        })
        .catch(() => {
          setNotification({
            message: `Information of '${person.name}' has already been removed from the server.`,
            type: 'error',
          });

          personService.getAll().then((currentPersons) => {
            setPersons(currentPersons);
          });
        });
    } else {
      const newPerson = { name: newName, number: newNumber };

      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));

        setNotification({
          message: `Added '${newPerson.name}'.`,
          type: 'notice',
        });
      });
    }

    setNewName('');
    setNewNumber('');
  };

  const handleRemove = (id) => {
    const person = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));

        setNotification({
          message: `A person '${person.name}' has been removed.`,
          type: 'notice',
        });
      });
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} setter={setNotification} />
      <Filter filterWith={filterWith} onChange={handleOnChange(setFilterWith)} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        setters={{ setNewName, setNewNumber }}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterWith={filterWith} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
