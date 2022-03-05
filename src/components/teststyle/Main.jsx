import React from 'react';
import Results from './Results';
import News from './News';

function Main() {
  return (
    <div className="Main">
      <div className="Title u-center-text">
        <h2>Bahrain Grand Prix</h2>
      </div>
      <Results />
      <News />
    </div>
  );
}

export default Main;
