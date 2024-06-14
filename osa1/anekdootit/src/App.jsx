/* eslint-disable react/prop-types */
import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [points, setPoints] = useState({});

  const [selected, setSelected] = useState(0);

  const selectAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    const _points = { ...points };

    if (!_points[selected]) {
      _points[selected] = 1;
    } else {
      _points[selected] += 1;
    }
    setPoints(_points);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected] || 0} votes.</p>
      <Button onClick={selectAnecdote} text='Next anecdote' />
      <Button onClick={voteAnecdote} text='Vote anecdote' />
      <h2>Anecdote with most votes</h2>
      <p>
        {Object.keys(points).length > 0
          ? anecdotes[Object.keys(points).reduce((acc, key) => (points[acc] > points[key] ? acc : key))]
          : 'No votes yet.'}
      </p>
    </div>
  );
};

export default App;
