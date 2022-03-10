import React from 'react';

import News from './News';
function Side() {
  return (
    <div className="Side">
      <div className="Message u-center-text">
        <span>
          <p className="petit">Up Next</p>
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
        >
          <img
            style={{
              width: 20,
              height: 'auto',
              backgroundColor: 'lightgrey',
              marginRight: 10,
            }}
            src="https://www.f1fantasytracker.com/Images/Flags/bahrain.png"
            alt=""
          />
          <span>
            <p>BAHRAIN</p>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
        >
          <img
            style={{ width: 12, marginRight: 10 }}
            src="https://www.f1fantasytracker.com/Images/Icons/calendar.png"
            alt=""
          />
          <span>
            <p className="petit">20 March 2022</p>
          </span>
        </div>
        <a href="#" className="btn btn--blue" style={{ marginTop: '1rem' }}>
          Play <span>♤</span>
        </a>
      </div>
      <News />
    </div>
  );
}

export default Side;
