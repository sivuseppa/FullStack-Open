/* eslint-disable react/prop-types */

import Country from './Country';

const Countries = ({ countries, filterWith, showSingle, setShowSingle }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes((showSingle ? showSingle : filterWith).toLowerCase())
  );

  if (filterWith && filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  } else if (filterWith) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <Country
            key={country.ccn3}
            country={country}
            totalAmount={filteredCountries.length}
            setShowSingle={setShowSingle}
          />
        ))}
      </div>
    );
  }
};

export default Countries;
