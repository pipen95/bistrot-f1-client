import React from 'react';
// import Map from "./Map"
function Main() {
  return (
    <div className='Main'>
      <div className="Board">
        <h2>US Grand prix results</h2>
        <ul>
          <li>1-Max</li>
          <li>2-Lewis</li>
          <li>3-Gasly</li>
          <li>4-Ricciardo</li>
          <li>5Fernando</li>
        </ul>
        <a href="#" className='btn btn--blue'>Play games</a>
        <a href="#" className='btn-text'>Check Live Standings →</a>
      </div>
      <div className="Video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/c2jEcjLsk-s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="Wall">
        <h1>Wall</h1>
      </div>
    </div>
  );
}

export default Main;
