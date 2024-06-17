/* eslint-disable react/prop-types */
import Button from './Button';

const PersonForm = ({ newName, newNumber, onSubmit, onChange, setters }) => {
  return (
    <form>
      <div>
        Name: <input value={newName} onChange={onChange(setters.setNewName)} />
        <br />
        Number: <input value={newNumber} onChange={onChange(setters.setNewNumber)} />
      </div>
      <div>
        <Button type='submit' onClick={onSubmit} text='Add' />
      </div>
    </form>
  );
};

export default PersonForm;
