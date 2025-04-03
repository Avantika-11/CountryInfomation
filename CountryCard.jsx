
import React from 'react';
import './CountryCard.css'; 


function CountryCard({ country, style }) {
  return (
    <div className="country-card" style={style}>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}  
        className="flag"
      />
      <div className="info">
        <h2>{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong>{country.region}</p>
        <p><strong>Country:</strong>{country.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard;
