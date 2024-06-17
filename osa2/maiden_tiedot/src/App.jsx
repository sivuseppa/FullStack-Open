import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterWith, setFilterWith] = useState('');
  const [showSingle, setShowSingle] = useState('');

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all/').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleOnChange = (event) => {
    setFilterWith(event.target.value);
    if (showSingle) setShowSingle('');
  };

  return (
    <div>
      <h1>Find countries</h1>
      <Filter filterWith={filterWith} onChange={handleOnChange} />
      <Countries countries={countries} filterWith={filterWith} showSingle={showSingle} setShowSingle={setShowSingle} />
    </div>
  );
};

export default App;
