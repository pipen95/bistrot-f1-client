import React from 'react';

function Results() {
  const dflex = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="Results">
      <h3>Results</h3>
      <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
      <div>lorem</div>
      <div style={dflex}>
        <div style={{ marginRight: '2rem' }}>
          <a href="#" className="btn-text nowrap">
            Check Live Standings →
          </a>
        </div>
        <div>
          <a href="#" className="btn btn--blue nowrap">
            Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Results;
