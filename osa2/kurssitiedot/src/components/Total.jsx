/* eslint-disable react/prop-types */

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

export default Total;
