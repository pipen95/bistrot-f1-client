import React from 'react';

function Podium({ data }) {
  const driversPodium = [data[1], data[0], data[2]];
  console.log(driversPodium);
  return (
    <div className="Podium">
      {/* {driversPodium[0] &&
        driversPodium.map((driver, idx) => (
          <div key={idx}>
            <p>{driver.Driver.GivenName}</p>
          </div>
        ))} */}
      <div className="topscorerimgwrapper">
        <div>
          <img
            style={{ height: '75%', left: '8%' }}
            className="homedriverImage"
            alt=""
            src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/HamiltonFull.png"
          />
        </div>

        <div>
          <img
            style={{ left: '31%', height: '85%', zIndex: '6' }}
            className="homedriverImage"
            alt=""
            src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/VerstappenFull.png"
          />
        </div>

        <div>
          <img
            style={{ right: '8%' }}
            className="homedriverImage"
            alt=""
            src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/BottasFull.png"
          />
        </div>
      </div>
      <div className="topscorerboxwrapper">
        <div className="topscorerbox">
          <div className="mainPoints" id="HighDriPoints2">
            0
          </div>
        </div>
        <div className="topscorerbox" id="biggestFigure">
          <div className="mainPoints" id="HighDriPoints1">
            0
          </div>
        </div>
        <div className="topscorerbox">
          <div className="mainPoints" id="HighDriPoints3">
            0
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podium;
