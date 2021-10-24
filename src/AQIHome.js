import React from 'react';

import SearchCities from './aqi-components/SearchCities';
import './App.css';

function AQIHome() {
  return (
    <div className="App">
      <h1>CENTRAL POLLUTION CONTROL BOARD'S</h1>
      <h2 >AIR QUALITY STANDARDS</h2>
      <SearchCities />
    </div>
  );
}

export default AQIHome;
