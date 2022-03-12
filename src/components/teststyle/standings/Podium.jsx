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

      <img
        style={{ left: '13%', height: '75%' }}
        className="homedriverImage"
        alt=""
        src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/HamiltonFull.png"
      />

      <img
        style={{ left: '35%', zIndex: 5, height: '80%' }}
        className="homedriverImage"
        alt=""
        src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/VerstappenFull.png"
      />

      <img
        style={{ right: '13%' }}
        className="homedriverImage"
        alt=""
        src="https://res.cloudinary.com/f1-fantasy-tracker/image/upload/f_auto/v1618736029/FullBody/BottasFull.png"
      />
    </div>
  );
}

export default Podium;
