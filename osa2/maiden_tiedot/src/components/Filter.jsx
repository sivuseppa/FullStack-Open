/* eslint-disable react/prop-types */
const Filter = ({ filterWith, onChange }) => {
  return (
    <div>
      Filter shown with: <input value={filterWith} onChange={onChange} />
    </div>
  );
};

export default Filter;
