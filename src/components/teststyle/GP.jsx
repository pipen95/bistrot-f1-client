import React from 'react';
import Standings from './standings/Standings';

function GP() {
  return (
    <div className="GP">
      <div className="Title-GP u-center-text">
        <h2>Bahrain Grand Prix results</h2>
      </div>
      <Standings />
    </div>
  );
}

export default GP;
