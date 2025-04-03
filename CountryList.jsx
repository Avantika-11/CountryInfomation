import React from "react";
import "./CountryList.css";
import CountryCard from "./CountryCard";

function CountryList({ countries = [] }) {
  return (
    <div className="country-list">
      {countries.length > 0 ? (
        countries.map((country, idx) => (
          <CountryCard
            key={country.cca3 || idx} // Ensures a unique key
            country={country}
            style={{ animationDelay: `${idx * 0.1}s` }} // Animation effect
          />
        ))
      ) : (
        <p className="no-data">No countries available</p> // Handles empty data
      )}
    </div>
  );
}

export default CountryList;
