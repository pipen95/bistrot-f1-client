import React from 'react';

function GP() {
  const dflex = {
    display: 'flex',
  };

  return (
    <div className="GP">
      <div className="Title-GP u-center-text">
        <h2>Bahrain Grand Prix results</h2>
      </div>

      <div className="Drivers">
        <h3>Drivers</h3>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <div>
          <a href="#" className="btn-text nowrap">
            Check Live Standings →
          </a>
        </div>
      </div>
      <div className="Players">
        <h3>Players</h3>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
        <div>
          <a href="#" className="btn btn--blue">
            Play <span>♤</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GP;
