/* eslint-disable react/prop-types */

import { useState } from 'react';
import axios from 'axios';

import Button from './Button';
import WeatherWiev from './WeatherWiev';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Country = ({ country, totalAmount, setShowSingle }) => {
  const [weather, setWeather] = useState(['', null]);

  if (totalAmount === 1) {
    if (weather[0] !== country.capital[0]) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then((response) => {
        setWeather([country.capital[0], response.data]);
      });
    }

    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.name.common} width='100' />
        <WeatherWiev weather={weather[1]} />
      </div>
    );
  }

  return (
    <div>
      <p>
        {country.name.common} <Button type='button' onClick={() => setShowSingle(country.name.common)} text='Show' />
      </p>
    </div>
  );
};

export default Country;
