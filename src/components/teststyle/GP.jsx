import React from 'react';
import Standings from './standings/Standings';

function GP() {
  return (
    <div className="GP">
      <div className="Title-GP u-center-text">
        <h2>Bahrain Grand Prix results</h2>
      </div>
      <Standings />
      <div className="u-center-text">
        <a href="#" className="btn-text nowrap">
          View all stats →
        </a>
      </div>
    </div>
  );
}

export default GP;
