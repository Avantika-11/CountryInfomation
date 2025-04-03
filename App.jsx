import React, { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';

const API = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <h1>Country Information</h1>
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
