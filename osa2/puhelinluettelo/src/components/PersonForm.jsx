/* eslint-disable react/prop-types */
const PersonForm = ({ newName, newNumber, onSubmit, onChange, setters }) => {
  return (
    <form>
      <div>
        Name: <input value={newName} onChange={onChange(setters.setNewName)} />
        <br />
        Number: <input value={newNumber} onChange={onChange(setters.setNewNumber)} />
      </div>
      <div>
        <button type='submit' onClick={onSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
