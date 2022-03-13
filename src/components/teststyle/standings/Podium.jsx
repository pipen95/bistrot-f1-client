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
      <div className="Top3">
        <div className="topscorerimgwrapper">
          <div>
            <img
              style={{ height: 225, left: '8%' }}
              className="homedriverImage"
              alt=""
              src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/HamiltonFull.png"
            />
          </div>

          <div>
            <img
              style={{ left: '34%', height: 250, zIndex: '6' }}
              className="homedriverImage"
              alt=""
              src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/VerstappenFull.png"
            />
          </div>

          <div>
            <img
              style={{ left: '64%' }}
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
      <div className="Cta center u-margin-top-small u-margin-bottom-small">
        <a href="#" className="btn-text nowrap">
          View all drivers stats →
        </a>
      </div>
    </div>
  );
}

export default Podium;
